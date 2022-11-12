import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/logo.png';

import { BsGithub, BsTwitter, BsFacebook } from 'react-icons/bs';
import { FooterCategory } from './FooterCategory';

import type { IconType } from 'react-icons';

const Icon = ({ path, icon: Icon }: { path: string; icon: IconType }) => (
	<a href={path} className="hover:text-white" target="_blank" rel="noreferrer">
		<Icon />
	</a>
);

export const Footer = () => (
	<footer className="px-10 py-6 md:p-14 bg-gray-900 text-white mt-10">
		<div className="md:flex md:justify-between">
			<Link href="/">
				<Image
					src={logo}
					alt="Scribium logo"
					width={85}
					className="mb-7 mb:mb-0"
				/>
			</Link>
			<div className="grid gap-8 grid-cols-2 sm:grid-cols-3">
				<FooterCategory title="Resources">
					<FooterCategory.Item title="Flowbite" path="#" />
					<FooterCategory.Item title="Tailwind CSS" path="#" />
				</FooterCategory>

				<FooterCategory title="Resources">
					<FooterCategory.Item title="Flowbite" path="#" />
					<FooterCategory.Item title="Tailwind CSS" path="#" />
				</FooterCategory>

				<FooterCategory title="Resources">
					<FooterCategory.Item title="Flowbite" path="#" />
					<FooterCategory.Item title="Tailwind CSS" path="#" />
				</FooterCategory>

				<FooterCategory title="Resources">
					<FooterCategory.Item title="Flowbite" path="#" />
					<FooterCategory.Item title="Tailwind CSS" path="#" />
				</FooterCategory>
			</div>
		</div>
		<hr className="my-8 border-gray-700" />
		<div className="sm:flex sm:justify-between">
			<span className="text-sm text-gray-400">
				&copy; 2022 Scribium. All Rights Reserved.
			</span>
			<div className="flex space-x-4 text-lg text-gray-500 mt-4 sm:mt-0">
				<Icon path="#" icon={BsFacebook} />
				<Icon path="#" icon={BsTwitter} />
				<Icon path="https://github.com/scribium" icon={BsGithub} />
			</div>
		</div>
	</footer>
);
