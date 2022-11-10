import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { AppUser } from './interfaces/app-user.interface';

@Injectable()
export class UsersMapper {
	userToUserDto({ id, email, details }: AppUser): UserDto {
		const { firstName, lastName } = details || {};

		return { id, email, details: { firstName, lastName } };
	}
}
