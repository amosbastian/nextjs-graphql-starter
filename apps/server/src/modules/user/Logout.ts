import { Resolver, Mutation, Ctx } from "type-graphql";
import { ResolverContext } from "../../types/ResolverContext";

@Resolver()
export class LogoutResolver {
  @Mutation(() => Boolean)
  async logout(@Ctx() context: ResolverContext): Promise<boolean> {
    return new Promise((resolve, reject) =>
      context.req.session.destroy((error) => {
        if (error) {
          console.log(error);
          return reject(false);
        }

        context.res.clearCookie("qid");
        return resolve(true);
      }),
    );
  }
}
