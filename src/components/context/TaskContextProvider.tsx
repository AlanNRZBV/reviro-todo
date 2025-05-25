import {
	type Dispatch,
	type FC,
	type ReactNode,
	type SetStateAction,
} from 'react';
import { TaskContext } from './TaskContext.ts';

interface Props {
	children: ReactNode;
	appState: AppState;
	setAppState: Dispatch<SetStateAction<AppState>>;
}

const TaskContextProvider: FC<Props> = ({
	children,
	appState,
	setAppState,
}) => {
	const value: ITaskContext = {
		searchQuery: appState.searchQuery,
		setSearchQuery: (query) =>
			setAppState((prev) => ({ ...prev, searchQuery: query })),
		filter: appState.filter,
		setFilter: (filter) => setAppState((prev) => ({ ...prev, filter })),
	};

	return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export default TaskContextProvider;
