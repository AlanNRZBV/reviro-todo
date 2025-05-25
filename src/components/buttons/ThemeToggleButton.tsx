import { useTheme } from '@/components/context/hook.ts';

const ThemeToggleButton = () => {
	const { isDark, toggleTheme } = useTheme();

	return (
		<button
			onClick={toggleTheme}
			className="bg-custom-purple flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[5px] outline-none"
		>
			<span className="h-[22px] w-[22px]">
				<img
					src={
						isDark ? 'src/assets/icon_halfmoon.svg' : 'src/assets/icon_sun.svg'
					}
					alt="theme toggle button"
					className="object-cover"
				/>
			</span>
		</button>
	);
};

export default ThemeToggleButton;
