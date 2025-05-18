import { type FC } from 'react';
import { Button } from '@/components/ui/button';

interface Props {
	onClick: () => void;
}

const ToggleModalButton: FC<Props> = ({ onClick }) => {
	return (
		<Button
			onClick={onClick}
			className="bg-custom-purple hover:bg-custom-purple-dark hover:inset-ring-custom-purple shadow-equal! mt-auto mr-2 mb-8 ml-auto h-[50px] w-[50px] rounded-full hover:cursor-pointer hover:inset-ring-4"
		>
			{
				<img
					src="/src/assets/icon_plus.svg"
					alt="toggle add task modal"
					className="h-[24px] w-[24px]"
				/>
			}
		</Button>
	);
};

export default ToggleModalButton;
