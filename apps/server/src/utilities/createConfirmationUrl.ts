import { v4 } from "uuid";
import { redis } from "../redis";

export const createConfirmationEmail = async (userId: number) => {
  const token = v4();
  await redis.set(token, userId, "ex", 60 * 60 * 24); // 1 day expiration

  return `http://localhost:3000/user/confirm/${token}`;
};
