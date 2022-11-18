import * as yup from 'yup';

import { useYupForm } from 'hooks/useYupForm';
import { PASSWORD_REGEX, PASSWORD_ERROR_MESSAGE } from '@scribium/common';
import { useFetcher } from 'hooks/useFetcher';
import { createUser } from 'services/users.service';

const schema = yup.object({
	fullName: yup.string().required('Enter your first and last name'),
	email: yup
		.string()
		.email('Invalid email address')
		.required('Enter your email'),
	password: yup
		.string()
		.required('Enter your password')
		.matches(PASSWORD_REGEX, PASSWORD_ERROR_MESSAGE),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords must match'),
	terms: yup.bool().oneOf([true], 'You must accept the Terms and Conditions'),
});

export const useSignUpPage = () => {
	const { mutate, isLoading } = useFetcher(createUser);

	const yupForm = useYupForm(schema, ({ email, password, fullName }) => {
		mutate(
			{ email, password, fullName },
			{
				onSuccess: () => {
					yupForm.reset();
				},
				onError: ({ data: { message } }) => {
					yupForm.setError('email', { message });
				},
			}
		);
	});

	return { isLoading, ...yupForm };
};
