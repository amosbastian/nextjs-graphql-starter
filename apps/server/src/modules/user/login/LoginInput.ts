import { IsEmail } from "class-validator";
import { InputType, Field } from "type-graphql";
import { User } from "../../../entity/User";

@InputType()
export class LoginInput implements Partial<User> {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  password: string;
}
