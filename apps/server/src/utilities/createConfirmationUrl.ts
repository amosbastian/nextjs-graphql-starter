import { v4 } from "uuid";
import { redis } from "../redis";
import { confirmEmailPrefix } from "../constants/redis";

export const createConfirmationEmail = async (userId: number) => {
  const token = v4();
  await redis.set(
    confirmEmailPrefix + token,
    userId,
    "ex",
    60 * 60 * 24,
  ); // 1 day expiration

  return process.env.NODE_ENV === "development"
    ? `http://localhost:4200/confirm-email/${token}`
    : `https://${process.env.DOMAIN_NAME}/confirm-email/${token}`;
};
