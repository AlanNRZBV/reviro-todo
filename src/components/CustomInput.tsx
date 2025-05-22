import {
	type CSSProperties,
	type FC,
	type HTMLInputTypeAttribute,
} from 'react';
import { cn } from '@/lib/utils.ts';

interface Props {
	type: HTMLInputTypeAttribute;
	placeholder: string | undefined;
	value?: string | number | readonly string[] | undefined;
	onChange: (arg: string) => void;
	className?: string;
	style?: CSSProperties;
}

const CustomInput: FC<Props> = ({
	type,
	placeholder,
	value,
	onChange,
	className,
	style,
	...props
}) => {
	return (
		<div
			className={cn(
				'group focus-within:border-custom-purple-light-40 inset-ring-custom-purple group flex w-full items-center rounded-[5px] border-2 border-transparent px-4 py-2 inset-ring outline-none',
				className,
			)}
			style={style}
		>
			<input
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={(e) => {
					onChange(e.target.value);
				}}
				className="placeholder:text-custom-purple-light text-custom-purple caret-custom-purple w-full outline-none"
				{...props}
			/>
			<span className="ml-2 h-[21px] w-[21px]">
				<img src="src/assets/icon_search_light.svg" alt="search input" />
			</span>
		</div>
	);
};

export default CustomInput;
