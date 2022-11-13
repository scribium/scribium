import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/logo.png';

export const Header = () => (
	<header className="fixed top-0 w-full h-20 px-4 flex items-center justify-between shadow-lg shadow-gray-100 bg-white">
		<Link href="/">
			<Image src={logo} alt="Scribium logo" width={60} />
		</Link>
		<nav className="space-x-5 uppercase text-sm hidden sm:block">
			<Link href="#">Home</Link>
			<Link href="#">About us</Link>
			<Link href="#">Our offer</Link>
			<Link
				href="/sign-up"
				className="bg-primary text-white font-medium px-5 py-2.5 rounded-full"
			>
				Join now
			</Link>
		</nav>
	</header>
);
