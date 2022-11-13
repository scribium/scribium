import Link from 'next/link';

import { Checkbox } from 'components/Checkbox';
import { Input } from 'components/Input';
import { EntryForm } from '../EntryForm';
import { PageTitle } from '../PageTitle';

export default function SignUpPage() {
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
			>
				<Input type="text" label="full name" placeholder="Your full name" />
				<Input type="email" label="email" placeholder="Your email" />
				<Input type="password" label="password" placeholder="Your password" />

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
					/>
				</EntryForm.Group>
			</EntryForm>
		</>
	);
}
