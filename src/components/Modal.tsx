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
				onClick={() => {
					setInput('');
					onToggle();
				}}
				className="bg-custom-black absolute inset-0 h-full w-full opacity-75"
			></div>
			<div className="bg-custom-white absolute top-[7.375rem] right-[50%] flex w-[500px] translate-x-1/2 flex-col items-center rounded-2xl px-[1.875rem] py-[1.125rem]">
				<span className="mb-6 text-2xl font-medium uppercase">new note</span>
				<Input
					type="text"
					value={input}
					onChange={(e) => {
						setInput(e.target.value);
					}}
					placeholder="Input your note.."
					className="focus:ring-custom-purple-light placeholder:text-regular! placeholder-custom-purple-light! inset-ring-custom-purple text-custom-purple caret-custom-purple mb-32 w-full inset-ring-1 placeholder:font-medium focus:border-none! focus:shadow-none! focus:ring-2!"
				/>
				<div className="flex justify-between self-stretch">
					<CustomButton
						onClick={() => {
							setInput('');
							onToggle();
						}}
						text="cancel"
						variant="secondary"
					/>
					<CustomButton
						onClick={() => {
							addTask(input);
							setInput('');
						}}
						text="apply"
						variant="primary"
					/>
				</div>
			</div>
		</>
	);
};

export default Modal;
