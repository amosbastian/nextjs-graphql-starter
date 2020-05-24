import { MaxLength, IsEmail } from "class-validator";
import { InputType, Field } from "type-graphql";
import { IsEmailAlreadyExist } from "./isEmailAlreadyExist";

@InputType()
export class RegisterInput {
  @Field()
  @MaxLength(30)
  @IsEmailAlreadyExist({ message: "Username is already taken!" })
  username: string;

  @Field()
  @IsEmail()
  @IsEmailAlreadyExist({ message: "Email is already taken!" })
  email: string;

  @Field({ nullable: true })
  password?: string;
}
