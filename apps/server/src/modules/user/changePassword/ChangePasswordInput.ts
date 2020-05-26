import { InputType, Field } from "type-graphql";

@InputType()
export class ChangePasswordInput {
  @Field()
  password: string;

  @Field()
  token: string;
}
