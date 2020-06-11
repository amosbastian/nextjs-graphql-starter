import { User } from "../../entity/User";
import { Resolver, Query, Ctx } from "type-graphql";
import { CustomContext } from "../../types/CustomContext";

@Resolver()
export class MeResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() context: CustomContext): Promise<User | null> {
    const userId = context.req.session.userId;

    if (!userId) {
      return null;
    }

    const user = await User.findOne(userId);

    return user;
  }
}
