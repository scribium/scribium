import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import type { INestApplication } from '@nestjs/common';

export const swaggerSetup = (app: INestApplication) => {
	const config = new DocumentBuilder()
		.setTitle('Scribium API')
		.setDescription('Scribium Rest API documentation.')
		.setVersion('1.0.0')
		.setLicense('MIT', 'https://opensource.org/licenses/MIT')
		.build();

	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('docs', app, document);
};
