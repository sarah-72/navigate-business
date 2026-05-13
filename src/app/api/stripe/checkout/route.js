import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { rateLimit } from '@/lib/rate-limit'
import { getClientIp } from '@/lib/get-ip'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL

if (!BASE_URL) {
  throw new Error('Missing NEXT_PUBLIC_SITE_URL')
}

const limiter = rateLimit({ limit: 5, interval: 60 * 1000 })

const WORKSHOPS = {
  'startup-day': { title: 'Start-Up in a Day', price: 10000 },
  'ai-small-business': { title: 'AI for Small Business', price: 12000 },
  'content-converts': { title: 'Content That Converts', price: 10000 },
  'leadership-small-teams': { title: 'Leadership for Small Teams', price: 15000 },
}

function isValidEmail(email) {
  return typeof email === 'string' &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function isValidString(val) {
  return typeof val === 'string' && val.trim().length > 0
}

export async function POST(request) {
  try {
    // -----------------------------
    // IP + RATE LIMIT
    // -----------------------------
    const ip = getClientIp(request)

    if (!ip) {
      return NextResponse.json(
        { error: 'Unable to verify request origin' },
        { status: 400 }
      )
    }

    const allowed = await limiter(ip)

    if (!allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // -----------------------------
    // SAFE BODY PARSE
    // -----------------------------
    let body
    try {
      body = await request.json()
    } catch {
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      )
    }

    const { type, workshopId, tier, userEmail, userName } = body || {}

    // -----------------------------
    // GLOBAL VALIDATION
    // -----------------------------
    if (!isValidEmail(userEmail)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    const safeName = isValidString(userName)
      ? userName.trim().slice(0, 80)
      : 'Guest'

    // =====================================================
    //  KICKSTART FLOW
    // =====================================================
    if (type === 'kickstart') {
      const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        payment_method_types: ['card'],
        customer_email: userEmail,

        billing_address_collection: 'auto',
        phone_number_collection: { enabled: true },

        line_items: [
          {
            quantity: 1,
            price_data: {
              currency: 'gbp',
              unit_amount: 15000,
              product_data: {
                name: 'Navigate Kickstart Session',
                description: `1:1 strategy session with Sarah — ${safeName}`,
              },
            },
          },
        ],

        metadata: {
          type: 'kickstart',
          userEmail,
          userName: safeName,
          ip,
        },

        success_url: `${BASE_URL}/membership/success?type=kickstart`,
        cancel_url: `${BASE_URL}/membership`,
      })

      return NextResponse.json({ url: session.url })
    }

    // =====================================================
    //  WORKSHOP FLOW
    // =====================================================
    if (workshopId) {
      if (!isValidString(workshopId) || !WORKSHOPS[workshopId]) {
        return NextResponse.json(
          { error: 'Invalid workshop selected' },
          { status: 400 }
        )
      }

      const workshop = WORKSHOPS[workshopId]

      const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        payment_method_types: ['card'],
        customer_email: userEmail,

        billing_address_collection: 'auto',
        phone_number_collection: { enabled: true },

        line_items: [
          {
            quantity: 1,
            price_data: {
              currency: 'gbp',
              unit_amount: workshop.price,
              product_data: {
                name: workshop.title,
                description: `Workshop registration for ${safeName}`,
              },
            },
          },
        ],

        metadata: {
          type: 'workshop_registration',
          workshopId,
          userEmail,
          userName: safeName,
          ip,
        },

        success_url: `${BASE_URL}/workshops/thank-you`,
        cancel_url: `${BASE_URL}/workshops`,
        expires_at: Math.floor(Date.now() / 1000) + 1800,
      })

      return NextResponse.json({ url: session.url })
    }

    // =====================================================
    //  MEMBERSHIP FLOW (SUBSCRIPTION)
    // =====================================================
    if (tier) {
      const TIERS = {
        start: { name: 'Navigate Start', price: 4900, interval: 'month' },
        build: { name: 'Navigate Build', price: 9900, interval: 'month' },
        accelerate: { name: 'Navigate Accelerate', price: 17900, interval: 'month' },
      }

      if (!TIERS[tier]) {
        return NextResponse.json(
          { error: 'Invalid membership tier' },
          { status: 400 }
        )
      }

      const tierData = TIERS[tier]

      const session = await stripe.checkout.sessions.create({
        mode: 'subscription',
        payment_method_types: ['card'],
        customer_email: userEmail,

        billing_address_collection: 'auto',
        phone_number_collection: { enabled: true },
        allow_promotion_codes: true,

        line_items: [
          {
            quantity: 1,
            price_data: {
              currency: 'gbp',
              unit_amount: tierData.price,
              recurring: {
                interval: tierData.interval,
              },
              product_data: {
                name: tierData.name,
                description: `Navigate Business ${tierData.name}`,
              },
            },
          },
        ],

        metadata: {
          type: 'membership',
          tier,
          userEmail,
          userName: safeName,
          ip,
        },

        success_url: `${BASE_URL}/membership/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${BASE_URL}/membership`,
        expires_at: Math.floor(Date.now() / 1000) + 1800,
      })

      return NextResponse.json({ url: session.url })
    }

    return NextResponse.json(
      { error: 'Invalid request type' },
      { status: 400 }
    )

  } catch (error) {
    console.error('Checkout error:', error)

    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}