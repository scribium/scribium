import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
	JsonWebTokenError,
	TokenExpiredError as JwtTokenExpiredError,
} from 'jsonwebtoken';
import { TokenExpiredError } from './errors/token-expied.error';

type TokenType = 'ACCOUNT';

export interface Payload {
	type: TokenType;
	userId: number;
}

@Injectable()
export class TokenService {
	constructor(private readonly jwtService: JwtService) {}

	sign(type: TokenType, userId: number): string {
		return this.jwtService.sign({ type, userId }); // TOOD: expiresIn
	}

	// TODO: PUT TOKEN INTO REDIS
	use(type: TokenType, token: string): Payload {
		try {
			const payload = this.jwtService.verify<Payload>(token);

			if (payload.type !== type) {
				throw new BadRequestException('Incorrect token type.');
			}

			return payload;
		} catch (err) {
			if (err instanceof JwtTokenExpiredError) {
				throw new TokenExpiredError(this.jwtService.decode(token) as Payload);
			}

			if (err instanceof JsonWebTokenError) {
				throw new BadRequestException(err.message);
			}

			throw err;
		}
	}
}
