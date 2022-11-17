'use client';

import Link from 'next/link';

import { Input } from 'components/Input';
import { EntryForm } from '../EntryForm';
import { PageTitle } from '../PageTitle';
import { Checkbox } from 'components/Checkbox';
import { useSignInPage } from './useSignInPage';

export default function LoginPage() {
	const {
		register,
		handleFormSubmit,
		formState: { errors },
	} = useSignInPage();

	return (
		<>
			<PageTitle title="Sign in to your account" />
			<EntryForm
				buttonText="Sign in"
				helperText={{
					title: "Don't have an account yet?",
					linkTitle: 'Sign up',
					linkPath: '/sign-up',
				}}
				onSubmit={handleFormSubmit}
			>
				<Input
					type="email"
					label="email"
					placeholder="Your email"
					error={errors.email}
					{...register('email')}
				/>
				<Input
					type="password"
					label="password"
					placeholder="Your password"
					error={errors.password}
					{...register('password')}
				/>

				<EntryForm.Group>
					<Checkbox label="Remember me" {...register('remember')} />
					<Link href="#" className="text-primary">
						Forgot password?
					</Link>
				</EntryForm.Group>
			</EntryForm>
		</>
	);
}
