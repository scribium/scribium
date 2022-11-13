import Link from 'next/link';

import type { ReactNode } from 'react';

type Props = Readonly<{
	title: string;
	children: ReactNode;
}>;

export const FooterCategory = ({ title, children }: Props) => (
	<div>
		<h2 className="mb-6 text-sm font-semibold uppercase text-white">{title}</h2>
		<ul className="text-gray-400">{children}</ul>
	</div>
);

const Item = ({ title, path }: { title: string; path: string }) => (
	<li className="mb-4">
		<Link href={path} className="font-normal">
			{title}
		</Link>
	</li>
);

FooterCategory.Item = Item;
