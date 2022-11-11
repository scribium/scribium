import * as zod from 'zod';

export const APP_CONFIG_SCHEMA = zod.object({
	HOST: zod.string(),
	PORT: zod.string(), // TODO: CHANGE TO NUMBER
	SALT_OR_ROUNDS: zod.union([zod.string(), zod.number()]).transform((data) => {
		return typeof data === 'number' || isNaN(Number(data))
			? data
			: parseInt(data);
	}),
});
