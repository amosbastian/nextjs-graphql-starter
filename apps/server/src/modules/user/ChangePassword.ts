import { Resolver, Mutation, Arg, Ctx } from "type-graphql";
import { User } from "../../entity/User";
import { redis } from "../../redis";
import { forgotPasswordPrefix } from "../../constants/redis";
import { ChangePasswordInput } from "./changePassword/ChangePasswordInput";
import bcrypt from "bcryptjs";
import { CustomContext } from "../../types/ResolverContext";

@Resolver()
export class ChangePasswordResolver {
  @Mutation(() => User, { nullable: true })
  async changePassword(
    @Arg("input") { password, token }: ChangePasswordInput,
    @Ctx() context: CustomContext,
  ): Promise<User | null> {
    const userId = await redis.get(forgotPasswordPrefix + token);

    if (!userId) {
      return null;
    }

    const user = await User.findOne(userId);

    // TODO: log Error
    if (!user) {
      return null;
    }

    const newPassword = await bcrypt.hash(password, 12);
    user.password = newPassword;

    await redis.del(forgotPasswordPrefix + token);

    context.req.session.userId = user.id;

    return user;
  }
}
