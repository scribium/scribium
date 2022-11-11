import type * as zod from 'zod';
import type { ConfigService } from '@nestjs/config';
import type { APP_CONFIG_SCHEMA } from './app.constants';

export type AppConfigService = ConfigService<
	zod.infer<typeof APP_CONFIG_SCHEMA>,
	true
>;
