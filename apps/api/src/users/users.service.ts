import * as bcrypt from 'bcrypt';

import { Inject, Injectable } from '@nestjs/common';
import { PRISMA_TOKEN } from 'src/prisma/prisma.module';
import { CreateUserDto } from './dto/create-user.dto';
import { ConfigService } from '@nestjs/config';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { createUserEvent, CreateUserEvent } from './events/create-user.event';

import type { AppUser } from './interfaces/app-user.interface';
import type { AppConfigService } from 'src/app.types';
import type { PrismaClient } from '@prisma/client';

const include = { details: true } as const;

@Injectable()
export class UsersService {
	constructor(
		@Inject(PRISMA_TOKEN) private readonly prismaClient: PrismaClient,
		@Inject(ConfigService) private readonly configService: AppConfigService,
		private readonly eventEmitter: EventEmitter2
	) {}

	async createUser({
		email,
		password,
		fullName,
	}: CreateUserDto): Promise<AppUser> {
		const [firstName, lastName] = fullName.split(' ');

		const user = await this.prismaClient.user.create({
			data: {
				email,
				password: await this.hashPassword(password),
				details: {
					create: {
						firstName,
						lastName,
					},
				},
			},
			include,
		});

		this.eventEmitter.emit(createUserEvent, new CreateUserEvent(user.id));

		return user;
	}

	private hashPassword(password: string): Promise<string> {
		return bcrypt.hash(
			password,
			this.configService.get('SALT_OR_ROUNDS', { infer: true })
		);
	}
}
