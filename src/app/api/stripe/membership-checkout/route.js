import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { rateLimit } from '@/lib/rate-limit'
import { getClientIp } from '@/lib/get-ip'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL

if (!BASE_URL) {
  throw new Error('Missing NEXT_PUBLIC_SITE_URL')
}

// -----------------------------
// STRICT RATE LIMIT (ANTI-ABUSE)
// -----------------------------
const limiter = rateLimit({
  limit: 3, // very strict for money endpoint
  interval: 60 * 1000, // 1 minute
})

const TIERS = {
  start: { name: 'Navigate Start', price: 4900, interval: 'month' },
  build: { name: 'Navigate Build', price: 9900, interval: 'month' },
  accelerate: { name: 'Navigate Accelerate', price: 17900, interval: 'month' },
}

// -----------------------------
// VALIDATION HELPERS
// -----------------------------
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function isValidString(value) {
  return typeof value === 'string' && value.trim().length > 0
}

function sanitizeString(value, max = 80) {
  return typeof value === 'string'
    ? value.trim().slice(0, max)
    : ''
}

export async function POST(request) {
  try {
    // -----------------------------
    // IP CHECK (FALLBACK SAFE)
    // -----------------------------
    const ip = getClientIp(request) || '127.0.0.1'

    // -----------------------------
    // RATE LIMIT CHECK
    // -----------------------------
    const allowed = await limiter(ip)

    if (!allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again shortly.' },
        { status: 429 }
      )
    }

    // -----------------------------
    // SAFE JSON PARSE
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

    const { tier, userEmail, userName } = body || {}

    // -----------------------------
    // VALIDATION
    // -----------------------------
    if (!isValidString(tier) || !TIERS[tier]) {
      return NextResponse.json(
        { error: 'Invalid membership tier' },
        { status: 400 }
      )
    }

    if (!isValidEmail(userEmail)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    const tierData = TIERS[tier]

    const safeName = sanitizeString(userName || 'Member')

    // -----------------------------
    // STRIPE CHECKOUT (HARDENED)
    // -----------------------------
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],

      mode: 'subscription',

      customer_email: userEmail,

      billing_address_collection: 'auto',

      phone_number_collection: {
        enabled: true,
      },

      allow_promotion_codes: true,

      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: 'gbp',
            unit_amount: tierData.price,
            recurring: {
              interval: tierData.interval,
              interval_count: 1,
            },
            product_data: {
              name: tierData.name,
              description: `Navigate Business ${tierData.name} Membership`,
            },
          },
        },
      ],

      metadata: {
        type: 'membership',
        tier,
        userEmail,
        userName: safeName,
        ip, // useful for fraud tracking
      },

      success_url: `${BASE_URL}/membership/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${BASE_URL}/membership`,

      expires_at: Math.floor(Date.now() / 1000) + 1800,
    })

    return NextResponse.json(
      {
        url: session.url,
      },
      {
        headers: {
          'Cache-Control': 'no-store',
        },
      }
    )
  } catch (error) {
    console.error('Stripe membership checkout error:', error)

    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}