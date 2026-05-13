import { redis } from '@/lib/redis'

const LOCK_TIME = 60 * 10 // 10 minutes

export async function isCheckoutLocked({ ip, email }) {
  const ipKey = `checkout:ip:${ip}`
  const emailKey = `checkout:email:${email}`

  const [ipLock, emailLock] = await Promise.all([
    redis.get(ipKey),
    redis.get(emailKey),
  ])

  return Boolean(ipLock || emailLock)
}

export async function lockCheckout({ ip, email }) {
  const ipKey = `checkout:ip:${ip}`
  const emailKey = `checkout:email:${email}`

  await Promise.all([
    redis.set(ipKey, 1, { ex: LOCK_TIME }),
    redis.set(emailKey, 1, { ex: LOCK_TIME }),
  ])
}