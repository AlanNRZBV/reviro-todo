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
	isSearch?: boolean;
}

const CustomInput: FC<Props> = ({
	type,
	placeholder,
	value,
	onChange,
	className,
	style,
	isSearch,
	...props
}) => {
	return (
		<div
			className={cn(
				'group translate-all dark:inset-ring-custom-white dark:focus-within:ring-custom-white-40 focus-within:ring-custom-purple-light-40 inset-ring-custom-purple flex w-full items-center rounded-[5px] px-4 py-2 inset-ring duration-150 outline-none focus-within:ring-2',
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
				className="placeholder:text-custom-purple-light translate-all dark:placeholder:text-custom-dark-grey text-custom-purple dark:caret-custom-white caret-custom-purple w-full duration-150 outline-none"
				{...props}
			/>
			{isSearch && (
				<span className="ml-2 h-[21px] w-[21px]">
					<img src="src/assets/icon_search_light.svg" alt="search input" />
				</span>
			)}
		</div>
	);
};

export default CustomInput;
