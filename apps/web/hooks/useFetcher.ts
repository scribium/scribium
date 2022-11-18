import { useState } from 'react';

import type {
	OpArgType,
	OpErrorType,
	OpReturnType,
	TypedFetch,
} from 'openapi-typescript-fetch/dist/cjs/types';

interface FetcherOptions<T> {
	onSuccess?: (data: OpReturnType<T>) => unknown;
	onError?: (error: OpErrorType<T>) => unknown;
}

export const useFetcher = <T>(fn: TypedFetch<T>) => {
	const [isLoading, setIsLoading] = useState(false);

	const mutate = (
		data: OpArgType<T>,
		{ onSuccess, onError }: FetcherOptions<T> = {}
	) => {
		setIsLoading(true);

		fn(data)
			.then(({ data }) => {
				onSuccess && onSuccess(data);
			})
			.catch((err) => {
				if (onError && err instanceof fn.Error) {
					onError(err.getActualType());
				}
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return { isLoading, mutate };
};
