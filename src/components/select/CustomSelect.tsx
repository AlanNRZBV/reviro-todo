import { type FC, useState } from 'react';
import CustomSelectItem from '@/components/select/CustomSelectItem.tsx';

interface Props {
	value: string;
	onChange: (arg: string) => void;
	options: { value: string; title: string }[];
}

const CustomSelect: FC<Props> = ({ value, onChange, options }) => {
	const [show, setShow] = useState(false);
	return (
		<div className="min-w-[90px] flex-shrink-0">
			<button
				onClick={() => {
					setShow(!show);
				}}
				className="bg-custom-purple hover:shadow-equal focus:inset-ring-custom-purple focus:bg-custom-purple-dark text-custom-white relative flex w-full justify-between rounded-[5px] px-2.5 py-1.5 outline-none focus:inset-ring-2"
			>
				<span className="text-lg font-medium uppercase">{value}</span>
				<img
					src="/src/assets/icon_chevron_down.svg"
					alt="select button"
					className={`ml-2 ${show ? 'rotate-180' : ''}`}
				/>
			</button>
			<div
				className={`border-custom-purple bg-custom-white absolute flex flex-col rounded-[5px] border transition-all delay-150 ${show ? 'pointer-events-auto scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'}`}
			>
				{options.map(({ value, title }, index) => (
					<CustomSelectItem
						key={index}
						value={value}
						title={title}
						index={index}
						onChange={(arg) => {
							onChange(arg);
						}}
					/>
				))}
			</div>
		</div>
	);
};

export default CustomSelect;
