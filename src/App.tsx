import { Input } from '@/components/ui/input.tsx';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';
import TasksContainer from '@/components/tasks/TasksContainer.tsx';
import ToggleModalButton from '@/components/buttons/ToggleModalButton.tsx';
import Modal from '@/components/Modal.tsx';

const test: Todo[] = [
	{ _id: 'kek', text: 'test', isComplete: false, isNew: false },
	{ _id: 'kekas', text: '23423423', isComplete: false, isNew: true },
	{
		_id: 'kekasdas',
		text: 'adsfgsdfgsdfgsdfasdfg',
		isComplete: true,
		isNew: false,
	},
];

const App = () => {
	const [tasks, setTasks] = useState<Todo[]>(test);
	const [show, setShow] = useState(false);

	const toggleModal = () => {
		setShow(!show);
	};

	const addTask = (input: string) => {
		const newTask: Todo = {
			_id: crypto.randomUUID(),
			text: input,
			isComplete: false,
			isNew: true,
		};
		setTasks((prevState) => [...prevState, newTask]);
		setShow(!show);
	};

	const statusToggle = (_id: string) => {
		setTasks((prevState) =>
			prevState.map((item) =>
				item._id === _id ? { ...item, isComplete: !item.isComplete } : item,
			),
		);
	};

	return (
		<div className="font-kanit relative flex h-full">
			<Modal addTask={addTask} onToggle={toggleModal} show={show} />
			<div className="mx-auto flex flex-col items-center border border-amber-600">
				<div className="pt-[2.5rem]">
					<h1 className="text-custom-black mb-lg text-[1.625rem] font-medium uppercase">
						todo list
					</h1>
				</div>
				<div className="flex">
					<Input />
					<Select>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="Theme" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="light">Light</SelectItem>
							<SelectItem value="dark">Dark</SelectItem>
							<SelectItem value="system">System</SelectItem>
						</SelectContent>
					</Select>
					<button>switch</button>
				</div>
				<div className="">
					<TasksContainer tasks={tasks} onStatusChange={statusToggle} />
				</div>
				<ToggleModalButton onClick={toggleModal} />
			</div>
		</div>
	);
};

export default App;
