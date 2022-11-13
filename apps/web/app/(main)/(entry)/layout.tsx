import Image from 'next/image';
import logo from 'public/logo.png';

import type { ReactNode } from 'react';

export default function EntryLayout({ children }: { children: ReactNode }) {
	return (
		<div className="flex flex-col items-center">
			<Image src={logo} alt="Scribium logo" width={70} />

			{/* TODO: remove w-full if findDOMNode becomes availble https://beta.nextjs.org/docs/routing/linking-and-navigating#focus-and-scroll-management */}
			<div className="w-full">{children}</div>
		</div>
	);
}
