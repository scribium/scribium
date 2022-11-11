import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_CONFIG_SCHEMA } from './app.constants';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			validate: (data) => APP_CONFIG_SCHEMA.parse(data),
		}),
		PrismaModule,
		UsersModule,
	],
})
export class AppModule {}
