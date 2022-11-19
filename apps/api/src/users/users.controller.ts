import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersMapper } from './users.mapper';
import { UsersService } from './users.service';
import {
	ApiBadRequestResponse,
	ApiConflictResponse,
	ApiCreatedResponse,
	ApiNoContentResponse,
	ApiTags,
} from '@nestjs/swagger';
import { OpenAPIHttpException } from 'src/common/exceptions/openapi-http.exception';
import { UserDto } from './dto/user.dto';
import { TokenRequestDto } from './token/dto/token-request.dto';

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
	@ApiConflictResponse({
		type: OpenAPIHttpException,
	})
	async createUser(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
		return this.usersMapper.userToUserDto(
			await this.usersService.createUser(createUserDto)
		);
	}

	@Post('activation')
	@HttpCode(HttpStatus.NO_CONTENT)
	@ApiNoContentResponse()
	@ApiBadRequestResponse({
		type: OpenAPIHttpException,
	})
	async activeUser(@Body() tokenRequestDto: TokenRequestDto): Promise<void> {
		await this.usersService.activeUser(tokenRequestDto);
	}
}
