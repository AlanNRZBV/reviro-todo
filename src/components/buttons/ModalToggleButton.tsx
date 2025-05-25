import { type FC } from 'react';

interface Props {
	onClick: () => void;
}

const ModalToggleButton: FC<Props> = ({ onClick }) => {
	return (
		<button
			onClick={onClick}
			className="bg-custom-purple hover:bg-custom-purple focus:bg-custom-purple-dark focus:inset-ring-custom-purple shadow-equal mt-auto mr-2 mb-8 ml-auto flex h-[50px] w-[50px] items-center justify-center rounded-full outline-none hover:cursor-pointer focus:inset-ring-4"
		>
			{
				<img
					src="/src/assets/icon_plus.svg"
					alt="toggle add task modal"
					className="h-[24px] w-[24px]"
				/>
			}
		</button>
	);
};

export default ModalToggleButton;
