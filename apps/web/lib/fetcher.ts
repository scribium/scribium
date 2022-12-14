import { Fetcher } from 'openapi-typescript-fetch';

import type { paths } from '@scribium/openapi-types';

export const fetcher = Fetcher.for<paths>();

fetcher.configure({
	baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
});
