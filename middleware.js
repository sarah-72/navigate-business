import { NextResponse } from 'next/server'

function generateNonce() {
  const nonce = new Uint8Array(16)
  crypto.getRandomValues(nonce)
  return Buffer.from(nonce).toString('base64')
}

export function middleware(request) {
  const response = NextResponse.next()

  // Generate secure nonce for this request
  const nonce = generateNonce()

  // Store nonce in response headers for access in components
  response.headers.set('X-Nonce', nonce)
  
  // Existing security headers
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')


  const cspDirectives = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' https://js.stripe.com https://*.stripe.com https://cdn.jsdelivr.net`,
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "img-src 'self' data: https: blob:",
    "font-src 'self' data: https://fonts.gstatic.com",
    "connect-src 'self' https://*.stripe.com https://*.sanity.io https://api.mailchimp.com https://api.resend.com https://upstash.io https://*.upstash.io",
    "frame-src https://js.stripe.com https://*.stripe.com",
    "frame-ancestors 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "upgrade-insecure-requests",
  ].join('; ')


  response.headers.set(
    'Content-Security-Policy-Report-Only',
    cspDirectives
  )

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - admin (Netlify Decap CMS - has its own security)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|admin|favicon.ico).*)',
  ],
}