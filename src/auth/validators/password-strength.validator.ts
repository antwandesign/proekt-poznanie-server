import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'PasswordStrength', async: true })
@Injectable()
export class PasswordStrength implements ValidatorConstraintInterface {
  constructor() {}

  validate(value: string) {
    const regex = new RegExp('^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$');

    const invalid = regex.exec(value);

    return !invalid;
  }
  defaultMessage(args: ValidationArguments) {
    return `Password is weak`;
  }
}
