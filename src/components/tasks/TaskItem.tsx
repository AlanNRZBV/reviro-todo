import { type FC } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { isTaskNew } from '@/lib/utils.ts';

interface Props {
	task: ITask;
	index: number;
	onStatusChange: (arg: string) => void;
}

const TaskItem: FC<Props> = ({ task, index, onStatusChange }) => {
	const { _id, isComplete, text, createdAt } = task;

	const isNew = isTaskNew(createdAt);

	return (
		<div
			key={_id}
			className="border-b-custom-purple mb-[17px] flex w-full items-center border-b pb-[17px] last-of-type:mb-0 last-of-type:border-0 hover:cursor-pointer"
		>
			<Checkbox
				checked={isComplete}
				onCheckedChange={() => onStatusChange(_id)}
				className="data-[state=checked]:bg-custom-purple border-custom-purple mr-[17px] h-[26px] w-[26px] border outline-none data-[state=checked]:border-0"
				id={`task-checkbox-${index}`}
			/>
			<label
				htmlFor={`task-checkbox-${index}`}
				className={`dark:text-custom-white mr-auto text-xl uppercase ${isComplete ? 'text-[rgba(37,37,37,0.5)] line-through' : ''}`}
			>
				{text}#{index + 1}
			</label>
			{isNew && (
				<span className="text-custom-white bg-custom-purple ml-2 rounded-sm px-2 text-xs">
					new
				</span>
			)}
			<div className="ml-[17px] flex max-h-[18px] items-center gap-2.5">
				<button className="group">
					<img
						src="src/assets/icon_pencil.svg"
						alt="edit task button"
						className="h-[18px] w-[18px] group-hover:hidden hover:cursor-pointer"
					/>
					<img
						src="src/assets/icon_pencil_active.svg"
						alt="edit task button"
						className="hidden h-[18px] w-[18px] group-hover:block hover:cursor-pointer"
					/>
				</button>
				<button className="group">
					<img
						src="src/assets/icon_trash.svg"
						alt="delete task button"
						className="h-[18px] w-[18px] group-hover:hidden hover:cursor-pointer"
					/>
					<img
						src="src/assets/icon_trash_active.svg"
						alt="delete task button"
						className="hidden h-[18px] w-[18px] group-hover:block hover:cursor-pointer"
					/>
				</button>
			</div>
		</div>
	);
};

export default TaskItem;
