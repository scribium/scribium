import { Spinner } from './Spinner';
import { twMerge } from 'tailwind-merge';

import type { ButtonHTMLAttributes } from 'react';

type Props = Readonly<{ loading?: boolean }> &
	ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ loading, className, children, ...rest }: Props) => (
	<button
		className={twMerge(
			'flex items-center justify-center gap-x-1.5 bg-primary text-white py-2 rounded-md transition-colors duration-300',
			loading && 'bg-opacity-60 cursor-not-allowed',
			className
		)}
		disabled={loading}
		{...rest}
	>
		{loading && <Spinner />}
		{children}
	</button>
);
