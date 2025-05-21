import { Input } from '@/components/ui/input.tsx';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select.tsx';
import { useTaskContext } from '@/components/context/hook.ts';

const Toolbar = () => {
	const { searchQuery, setSearchQuery, filter, setFilter } = useTaskContext();

	return (
		<div className="flex grow-1 gap-4">
			<div className="relative">
				<Input
					name="serach"
					value={searchQuery}
					placeholder="Search note..."
					onChange={(e) => {
						setSearchQuery(e.target.value);
					}}
					className="focus:ring-custom-purple-light placeholder:text-regular! placeholder-custom-purple-light! inset-ring-custom-purple text-custom-purple caret-custom-purple border-none inset-ring-1 focus:ring-1"
				/>
				<span className="group absolute top-1/2 right-0 mr-4 h-[21px] w-[21px] -translate-y-1/2">
					<img src="src/assets/icon_search_light.svg" alt="search input" />
				</span>
			</div>
			<Select
				value={filter}
				onValueChange={(v) => {
					setFilter(v);
				}}
			>
				<SelectTrigger className="bg-custom-purple text-custom-white! shadow-equal! rounded-[5px] p-2.5 text-lg font-medium! uppercase">
					<SelectValue placeholder="All" />
				</SelectTrigger>
				<SelectContent>
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
