import { Resolver, Mutation, Arg } from "type-graphql";
import { User } from "../../entity/User";
import { redis } from "../../redis";
import { forgotPasswordPrefix } from "../../constants/redis";
import { ChangePasswordInput } from "./changePassword/ChangePasswordInput";
import bcrypt from "bcryptjs";

@Resolver()
export class ChangePasswordResolver {
  @Mutation(() => User, { nullable: true })
  async changePassword(
    @Arg("input") { password, token }: ChangePasswordInput,
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
    await User.update({ id: user.id }, { password: newPassword });

    await redis.del(forgotPasswordPrefix + token);

    return user;
  }
}
