import { type FC } from 'react';
import TaskItem from '@/components/tasks/TaskItem.tsx';
import { useTaskContext } from '@/components/context/hook.ts';

interface Props {
	tasks: ITask[];
	onStatusChange: (arg: string) => void;
}

const TasksContainer: FC<Props> = ({ tasks, onStatusChange }) => {
	const { searchQuery, filter } = useTaskContext();
	const isEmpty = tasks.length === 0;

	const filteredTasks = tasks.filter((task) => {
		const matchesSearch = task.text
			.toLowerCase()
			.includes(searchQuery.toLowerCase());
		const matchesFilter =
			filter === 'all' ||
			(filter === 'complete' && task.isComplete) ||
			(filter === 'incomplete' && !task.isComplete) ||
			(filter === 'new' && task.isNew);
		return matchesSearch && matchesFilter;
	});

	console.log(tasks);

	return (
		<>
			{isEmpty && <div>no tasks</div>}
			<div className="mt-[1.865rem] flex max-w-[520px] flex-col">
				{filteredTasks.map((item, index) => (
					<TaskItem
						key={item._id}
						task={item}
						index={index}
						onStatusChange={onStatusChange}
					/>
				))}
			</div>
		</>
	);
};

export default TasksContainer;
