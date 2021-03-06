import { Resolver, Mutation, Arg } from "type-graphql";
import { User } from "../../entity/User";
import { redis } from "../../redis";
import { v4 } from "uuid";
import { sendEmail } from "../../utilities/sendEmail";
import { forgotPasswordPrefix } from "../../constants/redis";

@Resolver()
export class ForgotPasswordResolver {
  @Mutation(() => Boolean)
  async forgotPassword(
    @Arg("email") email: string,
  ): Promise<boolean> {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error("User could not be found");
    }

    const token = v4();

    await redis.set(
      forgotPasswordPrefix + token,
      user.id,
      "ex",
      60 * 60 * 24,
    );

    const url =
      process.env.NODE_ENV === "development"
        ? `http://localhost:4200/reset-password/${token}`
        : `https://${process.env.DOMAIN_NAME}/reset-password/${token}`;

    await sendEmail(email, url);

    return true;
  }
}
