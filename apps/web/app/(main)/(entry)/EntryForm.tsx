import Link from 'next/link';

import { Button } from 'components/Button';

import type { FormHTMLAttributes, ReactNode } from 'react';

type Props = Readonly<{
	buttonText: string;
	helperText?: {
		title: string;
		linkTitle: string;
		linkPath: string;
	};
	children: ReactNode;
}> &
	FormHTMLAttributes<HTMLFormElement>;

export const EntryForm = ({
	buttonText,
	helperText,
	children,
	...rest
}: Props) => (
	<form
		className="flex flex-col gap-y-4 mx-auto mt-8 w-full sm:max-w-md"
		{...rest}
	>
		{children}
		<Button>{buttonText}</Button>
		{helperText && (
			<span className="text-gray-600 text-sm mt-1">
				{helperText.title}{' '}
				<Link href={helperText.linkPath} className="text-primary">
					{helperText.linkTitle}
				</Link>
			</span>
		)}
	</form>
);

const Group = ({ children }: { children: ReactNode }) => (
	<div className="flex justify-between text-sm">{children}</div>
);

EntryForm.Group = Group;
