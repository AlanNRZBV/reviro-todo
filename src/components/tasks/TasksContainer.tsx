import { type FC } from 'react';
import TaskItem from '@/components/tasks/TaskItem.tsx';

interface Props {
	tasks: Todo[];
	onStatusChange: (arg: string) => void;
}

const TasksContainer: FC<Props> = ({ tasks, onStatusChange }) => {
	const isEmpty = tasks.length === 0;

	return (
		<>
			{isEmpty && <div>no tasks</div>}
			<div className="mt-[1.865rem] flex max-w-[520px] flex-col">
				{tasks.map((item, index) => (
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
