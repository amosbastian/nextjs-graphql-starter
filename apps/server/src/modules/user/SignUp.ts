import { Resolver, Mutation, Arg } from "type-graphql";
import bcrypt from "bcryptjs";
import { User } from "../../entity/User";
import { createConfirmationEmail } from "../../utilities/createConfirmationUrl";
import { sendEmail } from "../../utilities/sendEmail";
import { MaxLength, IsEmail, MinLength } from "class-validator";
import { InputType, Field } from "type-graphql";
import { IsUsernameAlreadyExist } from "./validation/isUsernameAlreadyExist";
import { IsEmailAlreadyExist } from "./validation/isEmailAlreadyExist";

@InputType()
class SignUpInput implements Partial<User> {
  @Field()
  @MinLength(3, { message: "Minimum length is $constraint1" })
  @MaxLength(30, { message: "Maximum length is $constraint1" })
  @IsUsernameAlreadyExist({
    message: "Username $value is already taken",
  })
  username: string;

  @Field()
  @IsEmail()
  @IsEmailAlreadyExist({
    message: "Email $value has already been used",
  })
  email: string;

  @Field()
  password: string;
}

@Resolver()
export class SignUpResolver {
  @Mutation(() => User)
  async signUp(
    @Arg("input") { email, password, username }: SignUpInput,
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      email,
      password: hashedPassword,
      username,
    }).save();

    const confirmationUrl = await createConfirmationEmail(user.id);
    await sendEmail(email, confirmationUrl);

    return user;
  }
}
