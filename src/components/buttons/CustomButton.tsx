import { type FC } from 'react';

interface Props {
	onClick: <T>(arg: T) => void;
	text: string;
	variant: 'primary' | 'secondary';
}

const CustomButton: FC<Props> = ({ onClick, text, variant }) => {
	const isPrimary = variant === 'primary';
	return (
		<button
			onClick={onClick}
			className={`${isPrimary ? 'bg-custom-purple' : 'bg-custom-white dark:bg-custom-black border-custom-purple border active:border-none'} active:inset-ring-custom-purple active:bg-custom-purple-dark focus:shadow-equal group rounded-[5px] px-[1.375rem] py-2.5 outline-none active:inset-ring-2`}
		>
			<span
				className={`${isPrimary ? 'text-custom-white' : 'text-custom-purple group-active:text-custom-white'} text-lg font-medium uppercase`}
			>
				{text}
			</span>
		</button>
	);
};

export default CustomButton;
