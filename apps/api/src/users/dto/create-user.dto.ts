import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';
import { PASSWORD_ERROR_MESSAGE, PASSWORD_REGEX } from '@scribium/common';

export class CreateUserDto {
	@IsNotEmpty()
	@IsEmail()
	email: string;

	@IsNotEmpty()
	@Matches(PASSWORD_REGEX, { message: PASSWORD_ERROR_MESSAGE })
	password: string;

	@IsNotEmpty()
	@IsString()
	fullName: string;
}
