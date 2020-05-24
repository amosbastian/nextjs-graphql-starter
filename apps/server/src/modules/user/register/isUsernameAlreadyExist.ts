import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";

import { User } from "../../../entity/User";

@ValidatorConstraint({ async: true })
export class IsUsernameAlreadyExistConstraint
  implements ValidatorConstraintInterface {
  async validate(username: string) {
    const user = await User.findOne({ where: { username } });
    return user ? false : true;
  }
}

export function IsUsernameAlreadyExist(
  validationOptions?: ValidationOptions,
) {
  return function (
    object: Record<string, any>,
    propertyName: string,
  ) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUsernameAlreadyExistConstraint,
    });
  };
}
