import { type FC, useState } from 'react';
import CustomButton from '@/components/buttons/CustomButton.tsx';
import CustomInput from '@/components/CustomInput.tsx';

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
				className="bg-custom-black absolute inset-0 z-40 h-full w-full opacity-75"
			></div>
			<div className="bg-custom-white dark:border-custom-white dark:bg-custom-black absolute top-[7.375rem] right-[50%] z-50 flex w-[500px] translate-x-1/2 flex-col items-center rounded-2xl px-[1.875rem] py-[1.125rem] max-sm:w-[400px] dark:border">
				<span className="dark:text-custom-white mb-6 text-2xl font-medium uppercase">
					new note
				</span>
				<CustomInput
					onChange={setInput}
					value={input}
					type="text"
					placeholder="Input your note..."
					className="mb-32"
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
