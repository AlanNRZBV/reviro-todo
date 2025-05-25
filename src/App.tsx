import { Toaster } from '@/components/ui/sonner';
import { useEffect, useState } from 'react';
import TasksContainer from '@/components/tasks/TasksContainer.tsx';
import ModalToggleButton from '@/components/buttons/ModalToggleButton.tsx';
import Modal from '@/components/Modal.tsx';
import { toast } from 'sonner';
import { getNow } from '@/lib/utils.ts';
import Toolbar from '@/components/Toolbar.tsx';
import TaskContextProvider from '@/components/context/TaskContextProvider.tsx';
import { ThemeProvider } from '@/components/context/ThemeContextProvider.tsx';

const App = () => {
	const [tasks, setTasks] = useState<ITask[]>([]);
	const [show, setShow] = useState(false);

	useEffect(() => {
		try {
			const savedTasks = localStorage.getItem('tasks');
			if (savedTasks) {
				setTasks(JSON.parse(savedTasks));
			}
		} catch (error) {
			console.error('Ошибка при загрузке задач из localStorage:', error);
		}
	}, []);

	useEffect(() => {
		try {
			localStorage.setItem('tasks', JSON.stringify(tasks));
		} catch (error) {
			console.error('Ошибка при сохранении задач в localStorage:', error);
		}
	}, [tasks]);

	const toggleModal = () => {
		setShow(!show);
	};

	const addTask = (input: string) => {
		if (input === '') {
			toast('Come on, type something!');
			return;
		}

		const newTask: ITask = {
			_id: crypto.randomUUID(),
			text: input,
			isComplete: false,
			isNew: true,
			createdAt: getNow(),
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
		<ThemeProvider>
			<TaskContextProvider>
				<div className="font-kanit bg-custom-white transition-color dark:bg-custom-black relative flex h-full duration-150">
					<Toaster />
					<Modal addTask={addTask} onToggle={toggleModal} show={show} />
					<div className="mx-auto flex flex-col items-center border border-amber-600 xl:w-[750px]">
						<div className="mb-[1.125rem] pt-[2.5rem]">
							<h1 className="text-custom-black transition-color dark:text-custom-white mb-lg text-[1.625rem] font-medium uppercase duration-150">
								todo list
							</h1>
						</div>
						<div className="flex w-full">
							<Toolbar />
						</div>
						<div className="">
							<TasksContainer tasks={tasks} onStatusChange={statusToggle} />
						</div>
						<ModalToggleButton onClick={toggleModal} />
					</div>
				</div>
			</TaskContextProvider>
		</ThemeProvider>
	);
};

export default App;
