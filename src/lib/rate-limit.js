import { redis } from '@/lib/redis'

export function rateLimit({ limit = 5, interval = 60 }) {
  return async function check(ip) {
    const key = `rate:${ip}`

    const script = `
      local current = redis.call("GET", KEYS[1])

      if not current then
        redis.call("SET", KEYS[1], 1, "EX", ARGV[2])
        return 1
      end

      current = tonumber(current)

      if current >= tonumber(ARGV[1]) then
        return 0
      end

      return redis.call("INCR", KEYS[1])
    `

    const result = await redis.eval(script, [key], [limit, interval])

    return result !== 0
  }
}