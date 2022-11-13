import Link from 'next/link';

import { Input } from 'components/Input';
import { EntryForm } from '../EntryForm';
import { PageTitle } from '../PageTitle';
import { Checkbox } from 'components/Checkbox';

export default function LoginPage() {
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
			>
				<Input type="email" label="email" placeholder="Your email" />
				<Input type="password" label="password" placeholder="Your password" />

				<EntryForm.Group>
					<Checkbox label="Remember me" />
					<Link href="#" className="text-primary">
						Forgot password?
					</Link>
				</EntryForm.Group>
			</EntryForm>
		</>
	);
}
