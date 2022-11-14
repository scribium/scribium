import { useMutation } from '@tanstack/react-query';
import { createUser } from 'services/users.service';

export const useUser = () => {
	const registerMutation = useMutation(createUser);

	return { registerMutation };
};
