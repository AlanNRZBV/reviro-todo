import { type FC, type ReactNode, useState } from 'react';
import { TaskContext } from './TaskContext.ts';

interface Props {
	children: ReactNode;
}

const TaskContextProvider: FC<Props> = ({ children }) => {
	const [searchQuery, setSearchQuery] = useState('');
	const [filter, setFilter] = useState('all');

	const value: ITaskContext = {
		searchQuery,
		setSearchQuery,
		filter,
		setFilter,
	};

	return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export default TaskContextProvider;
