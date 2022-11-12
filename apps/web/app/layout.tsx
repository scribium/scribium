import { Poppins } from '@next/font/google';

import type { ReactNode } from 'react';

import './global.css';

const poppins = Poppins({
	weight: ['400', '500', '600'],
	subsets: ['latin'],
	variable: '--font-poppins',
});

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={poppins.variable}>
			<head />
			<body>{children}</body>
		</html>
	);
}
