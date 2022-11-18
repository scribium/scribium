import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class OpenAPIHttpException {
	@ApiProperty()
	statusCode: number;

	@ApiProperty()
	message: string;

	@ApiPropertyOptional()
	error?: string;
}
