import { Resolver, Mutation, Arg, Ctx } from "type-graphql";
import bcrypt from "bcryptjs";
import { User } from "../../entity/User";
import { CustomContext } from "../../types/CustomContext";
import { AuthenticationError } from "apollo-server-express";
import { IsEmail } from "class-validator";
import { InputType, Field } from "type-graphql";

@InputType()
class LoginInput implements Partial<User> {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  password: string;
}

@Resolver()
export class LoginResolver {
  @Mutation(() => User, { nullable: true })
  async login(
    @Arg("input") { email, password }: LoginInput,
    @Ctx() context: CustomContext,
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
        "The entered email and password combination is wrong",
      );
    }

    if (!user.confirmedEmail) {
      throw new Error(
        "Your must confirm your email before logging in",
      );
    }

    if (context.req.session) {
      context.req.session.userId = user.id;
    }

    return user;
  }
}
