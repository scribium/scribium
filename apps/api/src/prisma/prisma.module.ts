import { Global, Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { PrismaClient } from '@prisma/client';
import { PrismaExceptionFilter } from './prisma-exception-filter';

export const PRISMA_TOKEN = Symbol('PRISMA_TOKEN');

@Global()
@Module({
	providers: [
		{
			provide: PRISMA_TOKEN,
			useFactory: async () => {
				const client = new PrismaClient();

				await client.$connect();
				return client;
			},
		},
		{
			provide: APP_FILTER,
			useClass: PrismaExceptionFilter,
		},
	],
	exports: [PRISMA_TOKEN],
})
export class PrismaModule {}
