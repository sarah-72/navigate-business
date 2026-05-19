# Stripe-Specific CSP Configuration

## Stripe Payment Flow with CSP

This document explains how Stripe integrates with the nonce-based CSP and what you need to know to keep payments working.

## Required CSP Directives for Stripe

For Stripe to work properly with this CSP, these directives are required:

```ts
// Script loading
script-src 'self' 'nonce-{nonce}' https://js.stripe.com https://*.stripe.com

// Hosted Checkout iframe
frame-src https://js.stripe.com https://*.stripe.com

// Stripe API calls
connect-src 'self' https://*.stripe.com

// Optional but recommended for error tracking
report-uri https://your-endpoint.com/csp-report (future)
```

**✅ All currently included in middleware.js**

## How Stripe Uses CSP Directives

### 1. Loading Stripe.js SDK

```
Domain: https://js.stripe.com
Directive: script-src
Method: Dynamic script tag injection
CSP Requirement: https://js.stripe.com in script-src
```

**Current config:** ✅ Included

### 2. Hosted Checkout (Payment iframe)

```
Domain: https://checkout.stripe.com (various subdomains)
Directive: frame-src
Method: iframe embedding
CSP Requirement: https://*.stripe.com in frame-src
```

**Current config:** ✅ Included

### 3. API Communication

```
Domain: https://api.stripe.com
Directive: connect-src
Method: XMLHttpRequest / fetch
CSP Requirement: https://*.stripe.com in connect-src
```

**Current config:** ✅ Included

### 4. Payment Request API (Optional)

```
Domain: https://q.stripe.com
Directive: connect-src
Method: Payment Request API
CSP Requirement: https://*.stripe.com in connect-src
```

**Current config:** ✅ Included (wildcard covers all subdomains)

## Testing Stripe with CSP

### Test 1: SDK Loading

```javascript
// In browser console, check if Stripe object exists:
console.log(window.Stripe)
// Expected: ƒ (d) function, not undefined or error
```

### Test 2: Payment Button Click

```javascript
// 1. Navigate to /membership
// 2. Click any tier button
// 3. Watch DevTools Console
// Expected: No CSP violations, checkout modal opens
```

### Test 3: Hosted Checkout

```javascript
// 1. After clicking payment button, checkout page should load
// 2. Check Network tab for Stripe requests
// 3. Verify iframe loads without CSP blocks
// Expected: Clean network tab, iframe visible
```

### Test 4: Payment Submission

```javascript
// 1. Fill in test card: 4242 4242 4242 4242
// 2. Use any future date and any CVC
// 3. Submit form
// 4. Watch Network tab and Console
// Expected: Successful request to Stripe API, no CSP errors
```

## Stripe Test Cards

Use these cards to test without charging:

| Card Number | Result | CVC | Date |
|---|---|---|---|
| 4242 4242 4242 4242 | Success | Any | Future |
| 4000 0000 0000 0002 | Declined | Any | Future |
| 4000 0025 0000 3155 | Requires authentication | Any | Future |

All test cards use:
- Any 3-digit CVC
- Any future expiration date

## Common Stripe + CSP Issues

### Issue: "Stripe object undefined"

**Symptom:**
```javascript
console.log(window.Stripe) // undefined
```

**Cause:** Stripe.js failed to load

**Solution:**

1. Check DevTools Console for CSP violation mentioning `js.stripe.com`
2. Verify middleware.js contains:
   ```ts
   `script-src 'self' 'nonce-${nonce}' https://js.stripe.com https://*.stripe.com`
   ```
3. Verify no browser extensions blocking Stripe
4. Clear browser cache and reload

### Issue: "Checkout modal won't open"

**Symptom:** Click payment button → nothing happens

**Cause:** Stripe.js loaded but can't create checkout session

**Solution:**

1. Check DevTools Network tab → look for calls to `api.stripe.com`
2. Check for CSP connect-src violations
3. Verify middleware.js contains:
   ```ts
   `connect-src 'self' https://*.stripe.com`
   ```
4. Check backend API logs for errors
5. Verify session was created by backend

### Issue: "Iframe won't display"

**Symptom:** Payment modal button clicked → blank area or error

**Cause:** Hosted checkout iframe blocked by CSP

**Solution:**

1. Check DevTools Network tab for iframe requests to `checkout.stripe.com`
2. Check Console for frame-src CSP violations
3. Verify middleware.js contains:
   ```ts
   `frame-src https://js.stripe.com https://*.stripe.com`
   ```
4. Ensure wildcard `https://*.stripe.com` covers all Stripe subdomains

### Issue: "Payment fails with network error"

**Symptom:** Submit payment → "Network error occurred"

**Cause:** Backend can't communicate with Stripe API

**Solution:**

1. Check backend logs (Vercel Logs)
2. Verify `STRIPE_SECRET_KEY` environment variable set
3. Verify Stripe API key not expired
4. Verify webhook secret configured
5. Not directly related to CSP, but ensure connect-src allows Stripe

## CSP + Stripe Best Practices

### 1. Never Allow `'unsafe-eval'` for Stripe

**❌ BAD:**
```ts
script-src 'self' 'unsafe-eval' https://js.stripe.com
```

**✅ GOOD:**
```ts
script-src 'self' 'nonce-${nonce}' https://js.stripe.com
```

Stripe doesn't need `'unsafe-eval'` and allowing it weakens security.

### 2. Use Nonces for Any Stripe-Related Scripts

**❌ BAD:**
```tsx
// Client inline script without nonce
<script>{`initStripe()`}</script>
```

**✅ GOOD:**
```tsx
// Client inline script with nonce
import { useNonce } from '@/lib/csp-nonce'

export function StripeInit() {
  const nonce = useNonce()
  return (
    <script nonce={nonce}>{`
      // Stripe initialization code
    `}</script>
  )
}
```

### 3. Whitelist Only Required Stripe Domains

**Current approach (recommended):**
```ts
script-src https://js.stripe.com https://*.stripe.com
frame-src https://js.stripe.com https://*.stripe.com
connect-src https://*.stripe.com
```

**Why wildcards?**
- Stripe uses various subdomains (`js.stripe.com`, `checkout.stripe.com`, etc.)
- Wildcard covers all current and future subdomains
- More maintainable than listing each subdomain

### 4. Keep `form-action 'self'`

This prevents Stripe forms from posting to external domains:
```ts
form-action 'self'
```

This is safe because your backend handles all Stripe form submissions.

## Monitoring Stripe with CSP

### Enable CSP Reporting (Future)

Once confident in CSP, add reporting endpoint:

```ts
// In middleware.js, add to cspDirectives:
`report-uri https://your-reporting-endpoint.com/csp-report`
```

This sends CSP violations to your endpoint for monitoring.

### Check Logs for Stripe Violations

**In Vercel Dashboard:**
1. Go to Logs
2. Filter for CSP violations: `report-uri` requests
3. Look for violations mentioning Stripe domains
4. Monitor payment success rates

## Disabling CSP for Local Stripe Testing

If you need to disable CSP temporarily for testing:

**In middleware.js:**
```ts
// Disable CSP for development
if (process.env.NODE_ENV === 'development') {
  // Skip CSP setting
  return response
}

// Set CSP for production
response.headers.set('Content-Security-Policy-Report-Only', cspDirectives)
```

**Don't do this for production testing.** Test with CSP enabled.

## Migration Notes

### Before CSP Nonce

Old CSP allowed:
```
script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com
```

**Issues:**
- Any inline script could run
- `eval()` could execute arbitrary code
- Less secure overall

### After CSP Nonce

New CSP requires:
```
script-src 'self' 'nonce-${nonce}' https://js.stripe.com
```

**Benefits:**
- Only scripts with matching nonce execute
- `eval()` completely disabled
- Much harder to inject malicious scripts
- CSP violations logged for monitoring

## Stripe CSP Resources

- [Stripe CSP Documentation](https://stripe.com/docs/security/content-security-policy)
- [Stripe.js Loading](https://stripe.com/docs/js/including)
- [Stripe Hosted Checkout](https://stripe.com/docs/payments/checkout)
- [CSP Violation Debugging](https://stripe.com/docs/disputes/managing/evidence/csp-violations)

## Support

If Stripe stops working after CSP changes:

1. Check DevTools Console for CSP violations mentioning Stripe
2. Verify all three CSP directives in middleware.js
3. Clear browser cache (might be caching old CSP header)
4. Check backend logs for Stripe API errors
5. Contact Stripe support with CSP error messages
