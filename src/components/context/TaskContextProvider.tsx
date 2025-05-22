import { type FC, type ReactNode, useEffect, useState } from 'react';
import { TaskContext } from './TaskContext.ts';

interface Props {
	children: ReactNode;
}

const TaskContextProvider: FC<Props> = ({ children }) => {
	const getInitialState = <T,>(key: string, defaultValue: T): T => {
		try {
			const item = localStorage.getItem(key);
			return item ? JSON.parse(item) : defaultValue;
		} catch (error) {
			console.error(`Ошибка при чтении ${key} из localStorage:`, error);
			return defaultValue;
		}
	};

	const [searchQuery, setSearchQuery] = useState(
		getInitialState('searchQuery', ''),
	);
	const [filter, setFilter] = useState(getInitialState('filter', 'all'));

	useEffect(() => {
		try {
			localStorage.setItem('searchQuery', JSON.stringify(searchQuery));
		} catch (error) {
			console.error('Ошибка при сохранении searchQuery в localStorage:', error);
		}
	}, [searchQuery]);

	useEffect(() => {
		try {
			localStorage.setItem('filter', JSON.stringify(filter));
		} catch (error) {
			console.error('Ошибка при сохранении filter в localStorage:', error);
		}
	}, [filter]);

	const value: ITaskContext = {
		searchQuery,
		setSearchQuery,
		filter,
		setFilter,
	};

	return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export default TaskContextProvider;
