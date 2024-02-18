import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://eu2-sharing-raccoon-30937.upstash.io',
  token: process.env.REDIS_KEY!,
})