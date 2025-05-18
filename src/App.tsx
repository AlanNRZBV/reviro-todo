import { Input } from '@/components/ui/input.tsx';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';
import TasksContainer from '@/components/Tasks/TasksContainer.tsx';

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
	const [input, setInput] = useState<string>('');
	const [show, setShow] = useState(false);

	const toggleModal = () => {
		setShow(!show);
	};

	const addTask = () => {
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
			{show && (
				<>
					<div className="bg-custom-black absolute inset-0 h-full w-full opacity-75"></div>
					<div className="bg-custom-white absolute top-[7.375rem] right-[50%] flex w-[500px] translate-x-1/2 flex-col items-center border border-amber-600 px-[1.875rem] py-[1.125rem]">
						<span>new note</span>
						<Input
							type="text"
							value={input}
							onChange={(e) => {
								setInput(e.target.value);
							}}
							className="mb-32 w-full"
						/>
						<div className="flex justify-between self-stretch">
							<button onClick={toggleModal} className="cursor-pointer">
								cancel
							</button>
							<button onClick={addTask}>apply</button>
						</div>
					</div>
				</>
			)}
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
				<button onClick={toggleModal} className="mt-auto mr-2 mb-8 self-end">
					toggleModal
				</button>
			</div>
		</div>
	);
};

export default App;
