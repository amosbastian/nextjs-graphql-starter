import {
  Resolver,
  Mutation,
  Arg,
  InputType,
  Field,
  ID,
  Ctx,
} from "type-graphql";
import { User } from "../../entity/User";
import bcrypt from "bcryptjs";
import { CustomContext } from "../../types/ResolverContext";

@InputType()
class UpdateUserInput {
  @Field(() => String, { nullable: true })
  username: string | null;

  @Field(() => String, { nullable: true })
  email: string | null;

  @Field(() => String, { nullable: true })
  password: string | null;
}

@Resolver()
export class UpdateUserResolver {
  @Mutation(() => User)
  async updateUser(
    @Arg("id", () => ID, { nullable: true }) id: number,
    @Arg("input") input: UpdateUserInput,
    @Ctx() context: CustomContext,
  ): Promise<User | null> {
    const userId = context.req.session.userId;

    if (!id && !userId) {
      return null;
    }

    if (input.password) {
      input.password = await bcrypt.hash(input.password, 12);
    }

    await User.update({ id: id || userId }, input);
    const user = await User.findOne(id);
    return user;
  }
}
