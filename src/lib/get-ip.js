export function getClientIp(request) {
  // Vercel / proxies send real IP here
  const forwardedFor = request.headers.get('x-forwarded-for')

  if (forwardedFor) {
    // first IP = real client
    return forwardedFor.split(',')[0].trim()
  }

  const realIp = request.headers.get('x-real-ip')
  if (realIp) return realIp

  // fallback (not ideal but safe)
  return null
}