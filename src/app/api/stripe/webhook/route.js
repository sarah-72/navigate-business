import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { headers } from 'next/headers'
import { Resend } from 'resend'
import mailchimp from '@mailchimp/mailchimp_marketing'
import { redis } from '@/lib/redis'

const resend = new Resend(process.env.RESEND_API_KEY)

// -----------------------------
// MAILCHIMP SAFE INIT
// -----------------------------
if (process.env.MAILCHIMP_API_KEY && process.env.MAILCHIMP_SERVER) {
  mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER,
  })
}

// -----------------------------
// MAIN WEBHOOK
// -----------------------------
export async function POST(request) {
  try {
    const body = await request.text()
    const sig = headers().get('stripe-signature')

    if (!sig) {
      return NextResponse.json(
        { error: 'Missing signature' },
        { status: 400 }
      )
    }

    let event

    // -----------------------------
    // STRIPE SIGNATURE VERIFICATION
    // -----------------------------
    try {
      event = stripe.webhooks.constructEvent(
        body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      )
    } catch (err) {
      console.error('❌ Stripe signature verification failed:', err.message)
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      )
    }

    // -----------------------------
    // IDEMPOTENCY (REDIS SAFE GUARD)
    // -----------------------------
    const eventKey = `stripe:event:${event.id}`

    try {
      const alreadyProcessed = await redis.get(eventKey)

      if (alreadyProcessed) {
        return NextResponse.json({ received: true })
      }

      await redis.set(eventKey, '1', {
        ex: 60 * 60 * 24 * 7, // 7 days
      })
    } catch (redisErr) {
      // Fail open (DO NOT block payments if Redis fails)
      console.error('⚠️ Redis error (non-blocking):', redisErr)
    }

    // -----------------------------
    // EVENT ROUTING
    // -----------------------------
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object

        const type = session?.metadata?.type

        if (type === 'workshop_registration') {
          await handleWorkshopRegistration(session)
        }

        if (type === 'membership') {
          await handleMembershipSignup(session)
        }

        if (type === 'kickstart') {
          await handleKickstart(session)
        }

        break
      }

      case 'customer.subscription.deleted': {
        await handleMembershipCancellation(event.data.object)
        break
      }

      case 'invoice.payment_succeeded':
      case 'invoice.payment_failed': {
        console.log(`[Stripe] Billing event: ${event.type}`)
        break
      }

      default:
        console.log('[Stripe] Unhandled event:', event.type)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('🔥 Webhook fatal error:', error)

    return NextResponse.json(
      { error: 'Webhook failed' },
      { status: 500 }
    )
  }
}

// -----------------------------
// WORKSHOP HANDLER
// -----------------------------
async function handleWorkshopRegistration(session) {
  try {
    const { userEmail, userName } = session?.metadata || {}
    if (!userEmail) return

    const safeName = userName?.trim() || 'Participant'

    await resend.emails.send({
      from: 'Navigate Business <hello@navigatebusiness.co.uk>',
      to: userEmail,
      subject: 'Workshop Confirmed',
      html: `
        <h1>Workshop Confirmed</h1>
        <p>Hi ${safeName},</p>
        <p>Your workshop booking is confirmed.</p>
      `,
    })

    console.log('✅ Workshop email sent:', userEmail)
  } catch (error) {
    console.error('❌ Workshop handler error:', error)
  }
}

// -----------------------------
// MEMBERSHIP HANDLER
// -----------------------------
async function handleMembershipSignup(session) {
  try {
    const { tier, userEmail, userName } = session?.metadata || {}
    if (!userEmail) return

    const safeName = userName?.trim() || 'Member'
    const nameParts = safeName.split(' ')

    // MAILCHIMP (NON-BLOCKING)
    if (process.env.MAILCHIMP_API_KEY && process.env.MAILCHIMP_LIST_ID) {
      try {
        await mailchimp.lists.addListMember(
          process.env.MAILCHIMP_LIST_ID,
          {
            email_address: userEmail,
            status: 'subscribed',
            merge_fields: {
              FNAME: nameParts[0] || '',
              LNAME: nameParts.slice(1).join(' ') || '',
            },
            tags: [`Navigate ${tier || 'Member'}`],
          }
        )
      } catch (err) {
        console.error('⚠️ Mailchimp error:', err.message)
      }
    }

    await resend.emails.send({
      from: 'Navigate Business <hello@navigatebusiness.co.uk>',
      to: userEmail,
      subject: 'Welcome to Membership',
      html: `
        <h1>Welcome ${safeName}</h1>
        <p>Your membership is now active.</p>
      `,
    })

    console.log('✅ Membership email sent:', userEmail)
  } catch (error) {
    console.error('❌ Membership handler error:', error)
  }
}

// -----------------------------
// KICKSTART HANDLER (NEW)
// -----------------------------
async function handleKickstart(session) {
  try {
    const { userEmail, userName } = session?.metadata || {}
    if (!userEmail) return

    const safeName = userName?.trim() || 'Client'

    await resend.emails.send({
      from: 'Navigate Business <hello@navigatebusiness.co.uk>',
      to: userEmail,
      subject: 'Kickstart Session Confirmed',
      html: `
        <h1>Your Kickstart is Confirmed</h1>
        <p>Hi ${safeName},</p>
        <p>We’ll see you for your 1:1 Kickstart session soon.</p>
      `,
    })

    console.log('✅ Kickstart email sent:', userEmail)
  } catch (error) {
    console.error('❌ Kickstart handler error:', error)
  }
}

// -----------------------------
// CANCELLATION HANDLER
// -----------------------------
async function handleMembershipCancellation(subscription) {
  try {
    const email = subscription?.customer_email
    if (!email) return

    await resend.emails.send({
      from: 'Navigate Business <hello@navigatebusiness.co.uk>',
      to: email,
      subject: 'Membership Cancelled',
      html: `
        <h1>Membership Cancelled</h1>
        <p>Your subscription has ended.</p>
      `,
    })

    console.log('✅ Cancellation email sent:', email)
  } catch (error) {
    console.error('❌ Cancellation error:', error)
  }
}