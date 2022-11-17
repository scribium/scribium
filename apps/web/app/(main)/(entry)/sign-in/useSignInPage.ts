import * as yup from 'yup';

import { PASSWORD_ERROR_MESSAGE, PASSWORD_REGEX } from '@scribium/common';
import { useYupForm } from 'hooks/useYupForm';

const schema = yup.object({
	email: yup
		.string()
		.email('Invalid email address')
		.required('Enter your email'),
	password: yup
		.string()
		.required('Enter your password')
		.matches(PASSWORD_REGEX, PASSWORD_ERROR_MESSAGE),
	remember: yup.bool().required(),
});

export const useSignInPage = () => {
	const yupForm = useYupForm(schema, () => {
		console.log('sign in');
	});

	return { ...yupForm };
};
