import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const getNow = () => new Date().toISOString();

export const isTaskNew = (arg: string) => {
	const createdTime = new Date(arg).getTime();
	const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000;
	return createdTime >= oneDayAgo;
};

export const loadState = (): AppState => {
	try {
		const serializedState = localStorage.getItem('appState');
		if (serializedState === null) {
			return { tasks: [], searchQuery: '', filter: 'all' };
		}
		return JSON.parse(serializedState);
	} catch (err) {
		console.error('Ошибка при загрузке состояния:', err);
		return { tasks: [], searchQuery: '', filter: 'all' };
	}
};

export const saveState = (state: AppState) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('appState', serializedState);
	} catch (err) {
		console.error('Ошибка при сохранении состояния:', err);
	}
};
