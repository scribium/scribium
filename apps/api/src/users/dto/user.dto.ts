export class UserDto {
	id: number;
	email: string;
	details: Partial<{
		firstName: string;
		lastName?: string | null;
	}>;
}
