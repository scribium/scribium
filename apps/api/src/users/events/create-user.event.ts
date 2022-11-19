export const createUserEvent = Symbol();

export class CreateUserEvent {
	constructor(public userId: number) {}
}
