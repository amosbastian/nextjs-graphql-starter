import Redis from "ioredis";

export const redis = new Redis({
  port: 6379,
  host: process.env.REDIS_HOST,
});
