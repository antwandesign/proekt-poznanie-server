import {
  IsEmail,
  IsMobilePhone,
  IsNotEmpty,
  IsNumber,
  Length,
} from 'class-validator';

export class CreateSignupDto {
  @IsEmail()
  @Length(3)
  @IsNotEmpty()
  email: string;

  @IsMobilePhone()
  @Length(3)
  @IsNotEmpty()
  phone: string;

  @Length(3)
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  eventId: number;
}
