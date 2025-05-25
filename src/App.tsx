import { Toaster } from '@/components/ui/sonner';
import { useEffect, useState } from 'react';
import TasksContainer from '@/components/tasks/TasksContainer.tsx';
import ModalToggleButton from '@/components/buttons/ModalToggleButton.tsx';
import Modal from '@/components/Modal.tsx';
import { toast } from 'sonner';
import { getNow, loadState, saveState } from '@/lib/utils.ts';
import Toolbar from '@/components/Toolbar.tsx';
import TaskContextProvider from '@/components/context/TaskContextProvider.tsx';
import { ThemeContextProvider } from '@/components/context/ThemeContextProvider.tsx';

const App = () => {
	const [state, setState] = useState<AppState>(
		loadState((e) => {
			toast('Не могу загрузить данные' + e);
		}),
	);
	const [show, setShow] = useState(false);
	const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
	useEffect(() => {
		saveState(state, (e) => {
			toast('Не могу сохранить данные' + e);
		});
	}, [state]);

	const toggleModal = () => {
		setShow(!show);
		if (!show) {
			setEditingTaskId(null);
		}
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

		setState((prev) => ({
			...prev,
			tasks: [...prev.tasks, newTask],
		}));
		setShow(!show);
	};

	const editTask = (newText: string) => {
		if (editingTaskId) {
			setState((prev) => ({
				...prev,
				tasks: prev.tasks.map((task) =>
					task._id === editingTaskId ? { ...task, text: newText } : task,
				),
			}));
			setEditingTaskId(null);
			setShow(false);
		}
	};

	const statusToggle = (_id: string) => {
		setState((prev) => ({
			...prev,
			tasks: prev.tasks.map((item) =>
				item._id === _id ? { ...item, isComplete: !item.isComplete } : item,
			),
		}));
	};

	const deleteTask = (_id: string) => {
		setState((prev) => ({
			...prev,
			tasks: prev.tasks.filter((item) => item._id !== _id),
		}));
	};

	const openEditModal = (_id: string) => {
		setEditingTaskId(_id);
		setShow(true);
	};

	return (
		<ThemeContextProvider>
			<TaskContextProvider appState={state} setAppState={setState}>
				<div className="font-kanit bg-custom-white transition-color dark:bg-custom-black relative flex h-full duration-150 max-sm:px-2">
					<Toaster />
					<Modal
						addTask={addTask}
						onToggle={toggleModal}
						show={show}
						editTask={editTask}
						editingTask={
							editingTaskId
								? state.tasks.find((t) => t._id === editingTaskId)
								: null
						}
					/>
					<div className="mx-auto flex flex-col items-center xl:w-[750px]">
						<div className="mb-[1.125rem] pt-[2.5rem]">
							<h1 className="text-custom-black transition-color dark:text-custom-white mb-lg text-[1.625rem] font-medium uppercase duration-150">
								todo list
							</h1>
						</div>
						<div className="flex w-full">
							<Toolbar />
						</div>
						<div className="w-full max-w-[520px]">
							<TasksContainer
								tasks={state.tasks}
								onStatusChange={statusToggle}
								onEdit={openEditModal}
								onDelete={deleteTask}
							/>
						</div>
						<ModalToggleButton onClick={toggleModal} />
					</div>
				</div>
			</TaskContextProvider>
		</ThemeContextProvider>
	);
};

export default App;
