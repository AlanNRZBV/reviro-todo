import { type FC, type ReactNode, useEffect, useState } from 'react';
import { TaskContext } from './TaskContext.ts';

interface Props {
	children: ReactNode;
}

const TaskContextProvider: FC<Props> = ({ children }) => {
	const getInitialState = (key: string, defaultValue: string): string => {
		try {
			const item = localStorage.getItem(key);
			return item ? JSON.parse(item) : defaultValue;
		} catch (e) {
			console.error(e);
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
		} catch (e) {
			console.error(e);
		}
	}, [searchQuery]);

	useEffect(() => {
		try {
			localStorage.setItem('filter', JSON.stringify(filter));
		} catch (e) {
			console.error(e);
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
