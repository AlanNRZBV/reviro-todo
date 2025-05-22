import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select.tsx';
import { useTaskContext } from '@/components/context/hook.ts';
import CustomInput from '@/components/CustomInput.tsx';

const Toolbar = () => {
	const { searchQuery, setSearchQuery, filter, setFilter } = useTaskContext();

	return (
		<div className="flex grow-1 gap-4">
			<CustomInput
				placeholder="Search note..."
				type="text"
				value={searchQuery}
				onChange={setSearchQuery}
			/>
			<Select
				value={filter}
				onValueChange={(v) => {
					setFilter(v);
				}}
			>
				<SelectTrigger className="bg-custom-purple text-custom-white! shadow-equal! rounded-[5px] p-2.5 text-lg font-medium! uppercase">
					<SelectValue placeholder="All" />
				</SelectTrigger>
				<SelectContent className="border-custom-purple">
					<SelectItem value="all">All</SelectItem>
					<SelectItem value="complete">Complete</SelectItem>
					<SelectItem value="incomplete">Incomplete</SelectItem>
					<SelectItem value="new">New</SelectItem>
				</SelectContent>
			</Select>
			<button>switch</button>
		</div>
	);
};

export default Toolbar;
