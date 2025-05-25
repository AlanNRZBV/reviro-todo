import { useContext } from 'react';
import { TaskContext } from './TaskContext';
import { ThemeContext } from '@/components/context/ThemeContext.tsx';

export const useTaskContext = () => {
	const context = useContext(TaskContext);
	if (!context) {
		throw new Error('TODO ALERT HERE');
	}
	return context;
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('TODO ALERT HERE');
	}
	return context;
};
