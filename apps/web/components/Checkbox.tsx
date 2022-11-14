import { forwardRef } from 'react';

import type { InputHTMLAttributes, ReactNode } from 'react';
import type { FieldError } from 'react-hook-form';

type Props = Readonly<{
	label: ReactNode;
	error?: FieldError;
}> &
	InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = forwardRef<HTMLInputElement, Props>(
	({ label, error, ...rest }, ref) => (
		<div>
			<label className="flex items-center text-gray-800">
				<input
					type="checkbox"
					className="accent-primary mr-1.5"
					ref={ref}
					{...rest}
				/>{' '}
				{label}
			</label>
			{error && (
				<span className="text-xs italic mt-3 text-red-500">
					{error.message}
				</span>
			)}
		</div>
	)
);

Checkbox.displayName = 'Checkbox';
