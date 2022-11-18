import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

type TokenType = 'ACCOUNT';

interface Payload {
	type: TokenType;
	userId: number;
}

@Injectable()
export class TokenService {
	constructor(private readonly jwtService: JwtService) {}

	sign(type: TokenType, userId: number): string {
		return this.jwtService.sign({ type, userId } as Payload); // TOOD: expiresIn
	}
}
