import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersMapper } from './users.mapper';
import { UsersService } from './users.service';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
	constructor(
		private readonly usersService: UsersService,
		private readonly usersMapper: UsersMapper
	) {}

	@Post()
	@ApiCreatedResponse({
		description: 'The user has been created.',
		type: UserDto,
	})
	async createUser(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
		return this.usersMapper.userToUserDto(
			await this.usersService.createUser(createUserDto)
		);
	}
}
