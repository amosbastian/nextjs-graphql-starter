import { User } from "../../entity/User";
import { Resolver, Query, Ctx } from "type-graphql";
import { CustomContext } from "../../types/ResolverContext";

@Resolver()
export class MeResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() context: CustomContext) {
    const userId = context.req.session.userId;

    if (!userId) {
      return null;
    }

    const user = User.findOne(userId);

    return user;
  }
}
