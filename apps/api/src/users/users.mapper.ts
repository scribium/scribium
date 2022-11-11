import { Injectable } from '@nestjs/common';

import type { UserDto } from './dto/user.dto';
import type { AppUser } from './interfaces/app-user.interface';

@Injectable()
export class UsersMapper {
	userToUserDto({ id, email, details }: AppUser): UserDto {
		const { firstName, lastName } = details || {};

		return { id, email, details: { firstName, lastName } };
	}
}
