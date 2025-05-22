import { type FC } from 'react';

interface Props {
	value: string;
	title: string;
	onChange: (arg: string) => void;
	index: number;
}

const CustomSelectItem: FC<Props> = ({ value, title, onChange, index }) => {
	return (
		<div
			onClick={(e) => {
				const value = e.currentTarget.getAttribute('data-value');
				if (value) onChange(value);
			}}
			data-value={value}
			className="hover:bg-custom-purple-light-20 w-full p-1"
		>
			<span
				id={'select-item-title' + { index }}
				className="text-custom-purple inline-block w-full cursor-pointer text-base"
			>
				{title}
			</span>
		</div>
	);
};

export default CustomSelectItem;
