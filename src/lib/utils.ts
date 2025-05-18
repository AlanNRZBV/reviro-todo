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
