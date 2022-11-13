import type { InputHTMLAttributes, ReactNode } from 'react';

type Props = Readonly<{
	label: ReactNode;
}> &
	InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = ({ label, ...rest }: Props) => (
	<label className="flex items-center text-gray-800">
		<input type="checkbox" className="accent-primary mr-1.5" {...rest} />{' '}
		{label}
	</label>
);
