import { IsNotEmpty, IsString } from 'class-validator';

export class TokenRequestDto {
	@IsNotEmpty()
	@IsString()
	token: string;
}
