import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import type { AnyObjectSchema, InferType } from 'yup';
import type { SubmitHandler } from 'react-hook-form';

export const useYupForm = <T extends AnyObjectSchema>(
	schema: T,
	onSubmit: SubmitHandler<InferType<T>>
) => {
	const { handleSubmit, ...rest } = useForm<InferType<T>>({
		resolver: yupResolver(schema),
	});

	const handleFormSubmit = handleSubmit(onSubmit);

	return { handleFormSubmit, ...rest };
};
