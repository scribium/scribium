import {
	MdClose,
	MdInfo,
	MdOutlineCheckCircleOutline,
	MdOutlineWarningAmber,
} from 'react-icons/md';
import { twMerge } from 'tailwind-merge';

import type { IconType } from 'react-icons';

const variants: Record<Variant, { icon: IconType; styles: string }> = {
	info: {
		icon: MdInfo,
		styles: 'bg-sky-100 text-sky-700',
	},
	success: {
		icon: MdOutlineCheckCircleOutline,
		styles: 'bg-green-100 text-green-900',
	},
	warning: {
		icon: MdOutlineWarningAmber,
		styles: 'bg-yellow-100 text-yellow-800',
	},
	error: {
		icon: MdInfo,
		styles: 'bg-red-100 text-red-800',
	},
};

type Variant = 'info' | 'success' | 'warning' | 'error';

type Props = Readonly<{
	message: string;
	variant?: Variant;
	onClose?: () => void;
}>;

export const Alert = ({ message, variant = 'info', onClose }: Props) => {
	const { icon: Icon, styles } = variants[variant];

	return (
		<div
			className={twMerge(
				'flex justify-between items-center p-4 rounded-lg text-lg',
				styles
			)}
		>
			<div className="flex items-center">
				<Icon />
				<span className="ml-2 text-sm">{message}</span>
			</div>
			{onClose && <MdClose className="cursor-pointer" onClick={onClose} />}
		</div>
	);
};
