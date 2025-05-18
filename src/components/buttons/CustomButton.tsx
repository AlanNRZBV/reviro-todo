import { type FC } from 'react';
import { Button } from '@/components/ui/button.tsx';

interface Props {
	onClick: <T>(arg: T) => void;
	text: string;
	variant: 'primary' | 'secondary';
}

const CustomButton: FC<Props> = ({ onClick, text, variant }) => {
	const isPrimary = variant === 'primary';
	return (
		<Button
			onClick={onClick}
			className={`${isPrimary ? 'bg-custom-purple hover:bg-custom-purple focus:bg-custom-purple-dark focus:inset-ring-custom-purple' : 'bg-custom-white hover:bg-custom-white inset-ring-custom-purple focus:bg-custom-purple-dark inset-ring-1'} focus::shadow-equal group px-[1.375rem] py-2.5`}
		>
			<span
				className={`${isPrimary ? 'text-custom-white' : 'text-custom-purple group-focus:text-custom-white'} text-lg font-medium uppercase`}
			>
				{text}
			</span>
		</Button>
	);
};

export default CustomButton;
