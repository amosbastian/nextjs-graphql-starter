import {
  Resolver,
  Mutation,
  Arg,
  InputType,
  Field,
  Int,
} from "type-graphql";
import { User } from "../../entity/User";
import bcrypt from "bcryptjs";

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
    @Arg("id", () => Int) id: number,
    @Arg("input") input: UpdateUserInput,
  ): Promise<User> {
    if (input.password) {
      input.password = await bcrypt.hash(input.password, 12);
    }
    await User.update({ id }, input);
    const user = await User.findOne(id);
    return user;
  }
}
