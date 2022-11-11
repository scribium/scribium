import type { User, UserDetails } from '@prisma/client';

export interface AppUser extends User {
	details: UserDetails | null;
}
