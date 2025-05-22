import { useTaskContext } from '@/components/context/hook.ts';
import CustomInput from '@/components/CustomInput.tsx';
import CustomSelect from '@/components/select/CustomSelect.tsx';
import { SELECT_OPTIONS } from '@/lib/mockData.ts';
import ThemeToggleButton from '@/components/buttons/ThemeToggleButton.tsx';

const Toolbar = () => {
	const { searchQuery, setSearchQuery, filter, setFilter } = useTaskContext();

	return (
		<div className="flex grow-1 gap-4">
			<CustomInput
				placeholder="Search note..."
				type="text"
				value={searchQuery}
				onChange={setSearchQuery}
				isSearch
			/>
			<CustomSelect
				onChange={(arg) => setFilter(arg)}
				value={filter}
				options={SELECT_OPTIONS}
			/>
			<ThemeToggleButton />
		</div>
	);
};

export default Toolbar;
