import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UserDto {
	@ApiProperty({ example: 10 })
	id: number;

	@ApiProperty({ example: 'john@gmail.com' })
	email: string;

	@ApiPropertyOptional({ example: 'John' })
	firstName?: string;

	@ApiPropertyOptional({
		example: 'Smith',
		type: String,
		nullable: true,
	})
	lastName?: string | null;
}
