'use client';

import Link from 'next/link';

import { Checkbox } from 'components/Checkbox';
import { Input } from 'components/Input';
import { EntryForm } from '../EntryForm';
import { PageTitle } from '../PageTitle';
import { useSignUpPage } from './useSignUpPage';

export default function SignUpPage() {
	const {
		register,
		handleFormSubmit,
		formState: { errors },
	} = useSignUpPage();

	return (
		<>
			<PageTitle title="Create a new account" />
			<EntryForm
				buttonText="Sign up"
				helperText={{
					title: 'Already have an account?',
					linkTitle: 'Sign in',
					linkPath: '/sign-in',
				}}
				onSubmit={handleFormSubmit}
			>
				<Input
					type="text"
					label="full name"
					placeholder="Your full name"
					error={errors.fullName}
					{...register('fullName')}
				/>
				<Input
					type="email"
					label="email address"
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
				<Input
					type="password"
					label="confirm password"
					placeholder="Confirm your password"
					error={errors.confirmPassword}
					{...register('confirmPassword')}
				/>

				<EntryForm.Group>
					<Checkbox
						label={
							<span>
								I accept the{' '}
								<Link href="#" className="text-primary">
									Terms and Conditions
								</Link>
							</span>
						}
						error={errors.terms}
						{...register('terms')}
					/>
				</EntryForm.Group>
			</EntryForm>
		</>
	);
}
