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

export const loadState = (onError: (e: Error) => void): AppState => {
	try {
		const serializedState = localStorage.getItem('appState');
		if (serializedState === null) {
			return { tasks: [], searchQuery: '', filter: 'all' };
		}
		return JSON.parse(serializedState);
	} catch (e) {
		onError(e as Error);
		return { tasks: [], searchQuery: '', filter: 'all' };
	}
};

export const saveState = (state: AppState, onError: (e: Error) => void) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('appState', serializedState);
	} catch (e) {
		onError(e as Error);
	}
};
