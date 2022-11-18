import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersMapper } from './users.mapper';
import { UsersService } from './users.service';
import { JwtModule } from '@nestjs/jwt';
import { TokenService } from './token/token.service';
import { UsersListener } from './users.listener';

@Module({
	imports: [JwtModule.register({ secret: 'secret123' })],
	controllers: [UsersController],
	providers: [UsersService, UsersMapper, TokenService, UsersListener],
})
export class UsersModule {}
