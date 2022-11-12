import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
	@ApiProperty({ example: 10 })
	id: number;

	@ApiProperty({ example: 'john@gmail.com' })
	email: string;

	@ApiProperty({ example: 'John' })
	firstName?: string;

	@ApiProperty({ example: 'Smith' })
	lastName?: string | null;
}
