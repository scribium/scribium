import { twMerge } from 'tailwind-merge';

import type { ButtonHTMLAttributes } from 'react';

export const Button = ({
	children,
	className,
	...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
	<button
		className={twMerge('bg-primary text-white py-2 rounded-md', className)}
		{...rest}
	>
		{children}
	</button>
);
