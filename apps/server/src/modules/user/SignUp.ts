import { Resolver, Mutation, Arg } from "type-graphql";
import bcrypt from "bcryptjs";
import { User } from "../../entity/User";
import { SignUpInput } from "./signUp/SignUpInput";
import { createConfirmationEmail } from "../../utilities/createConfirmationUrl";
import { sendEmail } from "../../utilities/sendEmail";

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
