import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { rateLimit } from '@/lib/rate-limit'
import { getClientIp } from '@/lib/get-ip'
import { getWorkshopBySlug } from '@/data/workshops'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL

const limiter = rateLimit({ limit: 5, interval: 60 * 1000 })

function resolveBaseUrl(request) {
  if (BASE_URL) return BASE_URL
  try {
    return new URL(request.url).origin
  } catch {
    return 'https://navigatebusiness.co.uk'
  }
}

const WORKSHOPS = {
  'startup-day': { title: 'The Navigate Start-up Day', price: 14900 },
  'ai-small-business': { title: 'AI for Small Business, Without the Overwhelm', price: 14900 },
  'content-converts': { title: 'Stop Overthinking Your Content', price: 14900 },
  'revive-thrive': { title: 'Revive & Thrive', price: 17900 },
}

const WORKSHOP_TOPICS_PRICES = {
  'The Navigate Start-up Day': 14900,
  'AI for Small Business, Without the Overwhelm': 14900,
  'Stop Overthinking Your Content': 14900,
  'Revive & Thrive': 17900,
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
    const ip = getClientIp(request) || '127.0.0.1'

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

    const { type, workshopId, workshopSlug, tier, userEmail, userName, selectedTopics, phone } = body || {}

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

    const baseUrl = resolveBaseUrl(request)

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

        success_url: `${baseUrl}/membership/success?type=kickstart`,
        cancel_url: `${baseUrl}/membership`,
      })

      return NextResponse.json({ url: session.url })
    }

    // =====================================================
    //  WORKSHOP FLOW
    // =====================================================
    if (type === 'workshop' || workshopId || workshopSlug) {
      let workshop = null
      let workshopReference = workshopId || workshopSlug || 'generic'
      let totalPrice = 0

      if (workshopSlug) {
        workshop = getWorkshopBySlug(workshopSlug)
        if (workshop) {
          totalPrice = workshop.price
        }
      } else if (workshopId) {
        workshop = WORKSHOPS[workshopId]
        if (workshop) {
          totalPrice = workshop.price
        }
      } else if (type === 'workshop' && Array.isArray(selectedTopics) && selectedTopics.length > 0) {
        // Calculate total price from selected workshop topics
        totalPrice = selectedTopics.reduce((sum, topic) => {
          return sum + (WORKSHOP_TOPICS_PRICES[topic] || 0)
        }, 0)

        if (totalPrice > 0) {
          workshop = {
            title: selectedTopics.length === 1 ? selectedTopics[0] : `Workshop Registration (${selectedTopics.length} workshops)`,
            price: totalPrice,
          }
        }
      }

      if (!workshop || totalPrice <= 0) {
        return NextResponse.json(
          { error: 'Invalid workshop selected' },
          { status: 400 }
        )
      }

      const workshopMetadata = {
        type: 'workshop_registration',
        workshopId: workshopReference,
        userEmail,
        userName: safeName,
        ip,
      }

      if (isValidString(phone)) {
        workshopMetadata.phone = phone.trim().slice(0, 32)
      }

      if (Array.isArray(selectedTopics) && selectedTopics.length > 0) {
        workshopMetadata.selectedTopics = selectedTopics
          .filter(Boolean)
          .slice(0, 12)
          .join(' | ')
      }

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
              unit_amount: totalPrice,
              product_data: {
                name: workshop.title,
                description: `Workshop registration for ${safeName}`,
              },
            },
          },
        ],

        metadata: workshopMetadata,

        success_url: `${baseUrl}/workshops/thank-you`,
        cancel_url: `${baseUrl}/workshops`,
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

        success_url: `${baseUrl}/membership/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${baseUrl}/membership`,
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
      {
        error: error?.message ? `Checkout failed: ${error.message}` : 'Failed to create checkout session',
      },
      { status: 500 }
    )
  }
}