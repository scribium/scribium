import type { Payload } from '../token.service';

export class TokenExpiredError extends Error {
	constructor(public payload: Payload) {
		super();
	}
}
