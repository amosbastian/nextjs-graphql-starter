import { Resolver, Mutation, Arg } from "type-graphql";
import { User } from "../../entity/User";
import { redis } from "../../redis";
import { confirmEmailPrefix } from "../../constants/redis";

@Resolver()
export class ConfirmUserEmailResolver {
  @Mutation(() => Boolean)
  async confirmUserEmail(
    @Arg("token") token: string,
  ): Promise<boolean> {
    const userId = await redis.get(confirmEmailPrefix + token);

    if (!userId) {
      throw new Error("User could not be found");
    }

    await User.update(
      { id: parseInt(userId, 10) },
      { confirmedEmail: true },
    );

    await redis.del(confirmEmailPrefix + token);

    return true;
  }
}
