// app/api/stripe/session/[sessionId]/route.js

import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { rateLimit } from '@/lib/rate-limit'
import { getClientIp } from '@/lib/get-ip'

const limiter = rateLimit({ limit: 30, interval: 60 * 1000 })

function isValidSessionId(id) {
  return typeof id === 'string' && id.startsWith('cs_')
}

export async function GET(request, { params }) {
  try {
    // -----------------------------
    // RATE LIMITING (LIGHT)
    // -----------------------------
    const ip = getClientIp(request)

    if (!ip) {
      return NextResponse.json(
        { error: 'Unable to determine IP' },
        { status: 400 }
      )
    }

    const allowed = await limiter(ip)

    if (!allowed) {
      return NextResponse.json(
        { error: 'Too many requests' },
        { status: 429 }
      )
    }

    const sessionId = params?.sessionId

    // -----------------------------
    // VALIDATION
    // -----------------------------
    if (!isValidSessionId(sessionId)) {
      return NextResponse.json(
        { error: 'Invalid session id' },
        { status: 400 }
      )
    }

    // -----------------------------
    // STRIPE FETCH (SAFE)
    // -----------------------------
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['customer'],
    })

    return NextResponse.json({
      id: session.id,
      customerId: session.customer?.id || session.customer || null,
      email: session.customer_email || null,
      amountTotal: session.amount_total || 0,
      currency: session.currency || 'gbp',
      metadata: session.metadata || {},
      subscriptionId: session.subscription || null,
      paymentStatus: session.payment_status || 'unknown',
      status: session.status || 'unknown',
    })
  } catch (error) {
    console.error('Error fetching session:', error)

    return NextResponse.json(
      { error: 'Failed to fetch session' },
      { status: 500 }
    )
  }
}