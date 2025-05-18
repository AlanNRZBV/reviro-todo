import { type FC, useState } from 'react';
import { Input } from '@/components/ui/input.tsx';
import CustomButton from '@/components/buttons/CustomButton.tsx';

interface Props {
	addTask: (arg: string) => void;
	onToggle: () => void;
	show: boolean;
}

const Modal: FC<Props> = ({ addTask, onToggle, show }) => {
	const [input, setInput] = useState<string>('');

	if (!show) {
		return null;
	}

	return (
		<>
			<div
				onClick={onToggle}
				className="bg-custom-black absolute inset-0 h-full w-full opacity-75"
			></div>
			<div className="bg-custom-white absolute top-[7.375rem] right-[50%] flex w-[500px] translate-x-1/2 flex-col items-center border border-amber-600 px-[1.875rem] py-[1.125rem]">
				<span>new note</span>
				<Input
					type="text"
					value={input}
					onChange={(e) => {
						setInput(e.target.value);
					}}
					className="mb-32 w-full"
				/>
				<div className="flex justify-between self-stretch">
					<CustomButton onClick={onToggle} text="cancel" variant="secondary" />
					<CustomButton
						onClick={() => addTask(input)}
						text="apply"
						variant="primary"
					/>
				</div>
			</div>
		</>
	);
};

export default Modal;
