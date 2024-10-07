import { useState } from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type TaskType = {
	id: number
	title: string
	isDone: boolean
}

export type FilterValuesType = 'all' | 'active' | 'completed';

function App() {
	const [tasks, setTasks] = useState<Array<TaskType>>([
		{ id: 1, title: 'HTML&CSS', isDone: true },
		{ id: 2, title: 'JS', isDone: true },
		{ id: 3, title: 'ReactJS', isDone: false },
		{ id: 4, title: 'RTK query', isDone: false },
		{ id: 5, title: 'GraphQL', isDone: false },
	]);

	const [filter, setFilter] = useState<FilterValuesType>('all');

	const removeTask = (taskId: number) => {
		setTasks(tasks.filter(task => task.id !== taskId));
	};

	const changeFilter = (newFilterValue: FilterValuesType) => {
		setFilter(newFilterValue)
	};

	let filteredTasks = tasks;

	if (filter === 'completed') {
		filteredTasks = tasks.filter(task => task.isDone);
	}

	if (filter === 'active') {
		filteredTasks = tasks.filter(task => !task.isDone)
	}


	return (
		<div className="App">
			<Todolist title="What to learn" 
								tasks={filteredTasks}
								removeTask={removeTask}
								changeFilter={changeFilter} />
		</div>
	);
}

export default App;
