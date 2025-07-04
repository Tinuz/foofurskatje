// lib/kv.ts
import { Redis } from '@upstash/redis';

export const kv = new Redis({
  url: process.env.LEADERBOARDDB_KV_REST_API_URL!,
  token: process.env.LEADERBOARDDB_KV_REST_API_TOKEN!,
});
