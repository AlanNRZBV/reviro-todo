import { type FC } from 'react';

interface Props {
	tasks: Todo[];
}

const TasksContainer: FC<Props> = ({ tasks }) => {
	const isEmpty = tasks.length === 0;

	return (
		<>
			{isEmpty && <div>no tasks</div>}
			{tasks.map((item) => (
				<div key={item._id} className="flex">
					<input type="checkbox" />
					<div>{item.text}</div>
					<div>
						<button>edit</button>
						<button>delete</button>
					</div>
				</div>
			))}
		</>
	);
};

export default TasksContainer;
