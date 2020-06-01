import { Resolver, Mutation, Ctx } from "type-graphql";
import { CustomContext } from "../../types/ResolverContext";

@Resolver()
export class LogoutResolver {
  @Mutation(() => Boolean)
  async logout(@Ctx() context: CustomContext): Promise<boolean> {
    return new Promise((resolve, reject) =>
      context.req.session.destroy((error) => {
        if (error) {
          console.log(error);
          return reject(false);
        }

        context.res.clearCookie(process.env.SESSION_NAME || "qid");
        return resolve(true);
      }),
    );
  }
}
