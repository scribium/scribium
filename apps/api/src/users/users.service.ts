import * as bcrypt from 'bcrypt';

import { Inject, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PRISMA_TOKEN } from 'src/prisma/prisma.module';
import { CreateUserDto } from './dto/create-user.dto';

import type { AppUser } from './interfaces/app-user.interface';

const include = { details: true } as const;

@Injectable()
export class UsersService {
	constructor(
		@Inject(PRISMA_TOKEN) private readonly prismaClient: PrismaClient
	) {}

	async createUser({
		email,
		password,
		fullName,
	}: CreateUserDto): Promise<AppUser> {
		const [firstName, lastName] = fullName.split(' ');

		// TODO: SEND EMAIL TO USER

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

		return user;
	}

	private hashPassword(password: string): Promise<string> {
		return bcrypt.hash(password, 10); // TODO: SET ROUNDS FROM CONFIG
	}
}
