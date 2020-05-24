import { Resolver, Mutation, Arg, Ctx } from "type-graphql";
import bcrypt from "bcryptjs";
import { User } from "../../entity/User";
import { LoginInput } from "./login/LoginInput";
import { ResolverContext } from "../../types/ResolverContext";

@Resolver()
export class LoginResolver {
  @Mutation(() => User, { nullable: true })
  async login(
    @Arg("input") { email, password }: LoginInput,
    @Ctx() context: ResolverContext,
  ): Promise<User | null> {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return null;
    }

    const passwordsMatch = await bcrypt.compare(
      password,
      user.password,
    );

    if (!passwordsMatch) {
      return null;
    }

    context.req.session.userId = user.id;

    return user;
  }
}
