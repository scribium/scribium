import * as zod from 'zod';

export const APP_CONFIG_SCHEMA = zod.object({
	SALT_OR_ROUNDS: zod.union([zod.string(), zod.number()]).transform((data) => {
		return typeof data === 'number' || isNaN(Number(data))
			? data
			: parseInt(data);
	}),
});
