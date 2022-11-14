import { forwardRef } from 'react';

import type { InputHTMLAttributes, ReactNode } from 'react';

type Props = Readonly<{
	label: ReactNode;
}> &
	InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = forwardRef<HTMLInputElement, Props>(
	({ label, ...rest }, ref) => (
		<label className="flex items-center text-gray-800">
			<input
				type="checkbox"
				className="accent-primary mr-1.5"
				ref={ref}
				{...rest}
			/>{' '}
			{label}
		</label>
	)
);

Checkbox.displayName = 'Checkbox';
