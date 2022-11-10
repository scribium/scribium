import { Global, Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

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
	],
	exports: [PRISMA_TOKEN],
})
export class PrismaModule {}
