import { useId } from 'react';

import type { InputHTMLAttributes } from 'react';

type Props = Readonly<{
	label: string;
	helperText?: string;
	error?: boolean;
}> &
	InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
	label,
	helperText,
	className,
	error,
	...rest
}: Props) => {
	const id = useId();

	return (
		<div className={`flex flex-col ${className}`}>
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
				{...rest}
			/>
			{helperText && (
				<p
					className={`text-xs italic mt-3 ${
						error ? 'text-red-500' : 'text-gray-600'
					}`}
				>
					{helperText}
				</p>
			)}
		</div>
	);
};
