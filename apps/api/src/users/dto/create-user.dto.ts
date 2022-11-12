import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';
import { PASSWORD_ERROR_MESSAGE, PASSWORD_REGEX } from '@scribium/common';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
	@IsNotEmpty()
	@IsEmail()
	@ApiProperty({ example: 'john@gmail.com' })
	email: string;

	@IsNotEmpty()
	@Matches(PASSWORD_REGEX, { message: PASSWORD_ERROR_MESSAGE })
	@ApiProperty({ example: 'John12345' })
	password: string;

	@IsNotEmpty()
	@IsString()
	@ApiProperty({ example: 'John Smith' })
	fullName: string;
}
