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
import { CustomContext } from "../../types/CustomContext";
import { MinLength, MaxLength, IsEmail } from "class-validator";
import { IsUsernameAlreadyExist } from "./validation/isUsernameAlreadyExist";
import { IsEmailAlreadyExist } from "./validation/isEmailAlreadyExist";

@InputType()
class UpdateUserInput {
  @Field(() => String, { nullable: true })
  @MinLength(3, { message: "Minimum length is $constraint1" })
  @MaxLength(30, { message: "Maximum length is $constraint1" })
  @IsUsernameAlreadyExist({
    message: "Username $value is already in use",
  })
  username: string | null;

  @Field(() => String, { nullable: true })
  @IsEmail()
  @IsEmailAlreadyExist({
    message: "Email $value is already in use",
  })
  email: string | null;

  @Field(() => String, { nullable: true })
  pictureId: string | null;

  @Field(() => String, { nullable: true })
  @MinLength(6, { message: "Minimum length is $constraint1" })
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

    await User.update({ id: id || Number(userId) }, input);
    const user = await User.findOne(id);
    return user;
  }
}
