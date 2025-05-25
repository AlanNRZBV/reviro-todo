import { type FC } from 'react';
import TaskItem from '@/components/tasks/TaskItem.tsx';
import { useTaskContext, useTheme } from '@/components/context/hook.ts';

interface Props {
	tasks: ITask[];
	onStatusChange: (arg: string) => void;
	onDelete: (arg: string) => void;
	onEdit: (arg: string) => void;
}

const TasksContainer: FC<Props> = ({
	tasks,
	onStatusChange,
	onDelete,
	onEdit,
}) => {
	const { searchQuery, filter } = useTaskContext();
	const { isDark } = useTheme();
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

	return (
		<>
			{isEmpty && (
				<div className="mt-[1.875rem] flex flex-col items-center gap-[1.25rem]">
					<div>
						<img
							src="src/assets/no-content-light.png"
							alt="no tasks exist"
							className={`${isDark ? 'hidden' : 'block'}`}
						/>
						<img
							src="src/assets/no-content-dark.png"
							alt="no tasks exist"
							className={`${!isDark ? 'hidden' : 'block'}`}
						/>
					</div>
					<span className="dark:text-custom-white text-custom-black text-[1.25rem]">
						Empty...
					</span>
				</div>
			)}
			<div className="mt-[1.865rem] flex flex-col">
				{filteredTasks.map((item, index) => (
					<TaskItem
						key={item._id}
						task={item}
						index={index}
						onStatusChange={onStatusChange}
						onDelete={onDelete}
						onEdit={onEdit}
					/>
				))}
			</div>
		</>
	);
};

export default TasksContainer;
