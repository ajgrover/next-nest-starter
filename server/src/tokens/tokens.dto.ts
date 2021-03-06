import { IsEmail, MinLength } from 'class-validator';

export default class CreateTokenDto {
  @IsEmail()
  email!: string;

  @MinLength(8)
  password!: string;
}
