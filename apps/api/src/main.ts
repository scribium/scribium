import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { swaggerSetup } from './setups/swagger.setup';

import type { NestFastifyApplication } from '@nestjs/platform-fastify';
import type { AppConfigService } from './app.types';

async function bootstrap() {
	const app = await NestFactory.create<NestFastifyApplication>(
		AppModule,
		new FastifyAdapter(),
		{ cors: true }
	);

	swaggerSetup(app);

	const config = app.get<AppConfigService>(ConfigService);

	await app
		.useGlobalPipes(new ValidationPipe())
		.listen(
			config.get('PORT', { infer: true }),
			config.get('HOST', { infer: true })
		);
}

bootstrap();
