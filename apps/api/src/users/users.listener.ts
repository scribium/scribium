import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { createUserEvent, CreateUserEvent } from './events/create-user.event';
import { TokenService } from './token/token.service';

@Injectable()
export class UsersListener {
	private readonly logger = new Logger(UsersListener.name);

	constructor(private readonly tokenService: TokenService) {}

	@OnEvent(createUserEvent)
	onCreateUserEvent({ userId }: CreateUserEvent) {
		const token = this.tokenService.sign('ACCOUNT', userId);

		// TODO: SEND EMAIL TO USER

		this.logger.verbose(token);
	}
}
