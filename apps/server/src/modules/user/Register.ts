import { Resolver, Mutation, Arg } from "type-graphql";
import bcrypt from "bcryptjs";
import { User } from "../../entity/User";
import { RegisterInput } from "./register/RegisterInput";
import { createConfirmationEmail } from "../../utilities/createConfirmationUrl";
import { sendEmail } from "../../utilities/sendEmail";

@Resolver()
export class RegisterResolver {
  @Mutation(() => User)
  async register(
    @Arg("input") { email, password, username }: RegisterInput,
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
