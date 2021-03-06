import { Resolver, Mutation, Arg } from "type-graphql";
import { User } from "../../entity/User";
import { redis } from "../../redis";
import { forgotPasswordPrefix } from "../../constants/redis";
import bcrypt from "bcryptjs";
import { InputType, Field } from "type-graphql";

@InputType()
export class ChangePasswordInput {
  @Field()
  password: string;

  @Field()
  token: string;
}

@Resolver()
export class ChangePasswordResolver {
  @Mutation(() => User, { nullable: true })
  async changePassword(
    @Arg("input") { password, token }: ChangePasswordInput,
  ): Promise<User | null> {
    const userId = await redis.get(forgotPasswordPrefix + token);

    if (!userId) {
      throw new Error("User could not be found");
    }

    const user = await User.findOne(userId);

    if (!user) {
      throw new Error("User could not be found");
    }

    const newPassword = await bcrypt.hash(password, 12);
    await User.update({ id: user.id }, { password: newPassword });

    await redis.del(forgotPasswordPrefix + token);

    return user;
  }
}
