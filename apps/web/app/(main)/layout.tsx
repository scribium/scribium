import { Header } from './Header';
import { Footer } from './Footer/Footer';

import type { ReactNode } from 'react';

export default function MainLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<Header />
			<div className="mt-28 px-5">{children}</div>
			<Footer />
		</>
	);
}
