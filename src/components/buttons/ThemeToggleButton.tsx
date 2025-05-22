import { useEffect, useState } from 'react';

const ThemeToggleButton = () => {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		const stored = localStorage.getItem('theme');

		if (stored) {
			document.documentElement.classList.toggle('dark', stored === 'dark');
			setIsDark(stored === 'dark');
		} else {
			const prefersDark = window.matchMedia(
				'(prefers-color-scheme: dark)',
			).matches;
			document.documentElement.classList.toggle('dark', prefersDark);
			setIsDark(prefersDark);
		}
	}, []);

	const toggleTheme = () => {
		const nextIsDark = !isDark;
		setIsDark(nextIsDark);
		document.documentElement.classList.toggle('dark', nextIsDark);
		localStorage.setItem('theme', nextIsDark ? 'dark' : 'light');
	};

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
					alt="theme toggle button - moon"
					className="object-cover"
				/>
			</span>
		</button>
	);
};

export default ThemeToggleButton;
