declare interface Todo {
	_id: string;
	text: string;
	status: 'completed' | 'new' | 'inProgress';
}
