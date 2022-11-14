import { forwardRef, useId } from 'react';
import { twMerge } from 'tailwind-merge';

import type { InputHTMLAttributes } from 'react';
import type { FieldError } from 'react-hook-form';

type Props = Readonly<{
	label: string;
	error?: FieldError;
}> &
	InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, Props>(
	({ label, className, error, ...rest }, ref) => {
		const id = useId();

		return (
			<div className={twMerge('flex flex-col', className)}>
				<label
					className="mb-2 tracking-wide text-gray-700 text-xs font-bold uppercase"
					htmlFor={id}
				>
					{label}
				</label>
				<input
					id={id}
					className={`appearance-none bg-gray-200 text-gray-700 border rounded py-2.5 px-4 focus:outline-none focus:bg-white focus:border-gray-500 ${
						error ? 'border-red-500' : 'border-gray-200'
					}`}
					ref={ref}
					{...rest}
				/>
				{error && (
					<p className="text-xs italic mt-3 text-red-500">{error.message}</p>
				)}
			</div>
		);
	}
);

Input.displayName = 'Input';
