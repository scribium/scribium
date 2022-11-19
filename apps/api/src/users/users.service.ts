import * as bcrypt from 'bcrypt';

import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { PRISMA_TOKEN } from 'src/prisma/prisma.module';
import { CreateUserDto } from './dto/create-user.dto';
import { ConfigService } from '@nestjs/config';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { createUserEvent, CreateUserEvent } from './events/create-user.event';
import { TokenRequestDto } from './token/dto/token-request.dto';
import { TokenService } from './token/token.service';
import { TokenExpiredError } from './token/errors/token-expied.error';

import type { AppUser } from './interfaces/app-user.interface';
import type { AppConfigService } from 'src/app.types';
import type { PrismaClient } from '@prisma/client';

const include = { details: true } as const;

@Injectable()
export class UsersService {
	constructor(
		@Inject(PRISMA_TOKEN) private readonly prismaClient: PrismaClient,
		@Inject(ConfigService) private readonly configService: AppConfigService,
		private readonly eventEmitter: EventEmitter2,
		private readonly tokenService: TokenService
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

	async deleteUser(id: number): Promise<AppUser> {
		return await this.prismaClient.user.delete({ where: { id }, include });
	}

	async activeUser({ token }: TokenRequestDto): Promise<void> {
		try {
			const { userId } = this.tokenService.use('ACCOUNT', token);

			await this.prismaClient.user.update({
				where: { id: userId },
				data: {
					active: true,
				},
			});
		} catch (err) {
			if (err instanceof TokenExpiredError) {
				await this.deleteUser(err.payload.userId);
				throw new BadRequestException('Token expired.');
			}

			throw err;
		}
	}

	private hashPassword(password: string): Promise<string> {
		return bcrypt.hash(
			password,
			this.configService.get('SALT_OR_ROUNDS', { infer: true })
		);
	}
}
