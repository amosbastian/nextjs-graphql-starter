import { Resolver, Mutation, Arg, Ctx } from "type-graphql";
import bcrypt from "bcryptjs";
import { User } from "../../entity/User";
import { LoginInput } from "./login/LoginInput";
import { ResolverContext } from "../../types/ResolverContext";
import { AuthenticationError } from "apollo-server-express";

@Resolver()
export class LoginResolver {
  @Mutation(() => User, { nullable: true })
  async login(
    @Arg("input") { email, password }: LoginInput,
    @Ctx() context: ResolverContext,
  ): Promise<User | null> {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error(
        `Could not find an account associated with ${email}`,
      );
    }

    const passwordsMatch = await bcrypt.compare(
      password,
      user.password,
    );

    if (!passwordsMatch) {
      throw new AuthenticationError(
        "The entered email and password combination is wrong.",
      );
    }

    if (!user.confirmedEmail) {
      throw new Error(
        "Your must confirm your email before logging in!",
      );
    }

    context.req.session.userId = user.id;

    return user;
  }
}
