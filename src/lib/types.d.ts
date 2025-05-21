declare interface ITask {
	_id: string;
	text: string;
	isComplete: boolean;
	isNew: boolean;
	createdAt: string;
}

declare interface ITaskContext {
	searchQuery: string;
	setSearchQuery: (arg: string) => void;
	filter: string;
	setFilter: (arg: string) => void;
}
