import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
	@IsNotEmpty()
	@IsEmail()
	email: string;

	@IsNotEmpty()
	@IsString() // TODO: PASSWORD REGEX
	password: string;

	@IsNotEmpty()
	@IsString()
	fullName: string;
}
