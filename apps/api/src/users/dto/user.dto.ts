import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
	@ApiProperty({ example: 10 })
	id: number;

	@ApiProperty({ example: 'john@gmail.com' })
	email: string;

	details: Partial<{
		firstName: string;
		lastName: string | null;
	}>;
}
