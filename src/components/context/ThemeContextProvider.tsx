import { type FC, type ReactNode, useEffect, useState } from 'react';
import { ThemeContext } from '@/components/context/ThemeContext.tsx';

interface Props {
	children: ReactNode;
}

export const ThemeContextProvider: FC<Props> = ({ children }) => {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		const stored = localStorage.getItem('theme');
		if (stored) {
			const isDarkMode = stored === 'dark';
			setIsDark(isDarkMode);
			document.documentElement.classList.toggle('dark', isDarkMode);
		} else {
			const prefersDark = window.matchMedia(
				'(prefers-color-scheme: dark)',
			).matches;
			setIsDark(prefersDark);
			document.documentElement.classList.toggle('dark', prefersDark);
		}
	}, []);

	const toggleTheme = () => {
		const nextIsDark = !isDark;
		setIsDark(nextIsDark);
		document.documentElement.classList.toggle('dark', nextIsDark);
		localStorage.setItem('theme', nextIsDark ? 'dark' : 'light');
	};

	return (
		<ThemeContext.Provider value={{ isDark, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
