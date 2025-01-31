import { FilterValuesType } from "./App";

export type TaskType = {
  id: number
  title: string
  isDone: boolean
};

type PropsType = {
  title: string
  tasks: Array<TaskType>
  changeFilter: (newFilterValue: FilterValuesType) => void
  removeTask: (taskId: number) => void
};

export function Todolist(props: PropsType) {
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {
          props.tasks.map(t => {
            return (
              <li>
                <input type="checkbox" checked={t.isDone} />
                <span>{t.title}</span>
                <button onClick={() => props.removeTask(t.id)}>x</button>
              </li>
            );
          })
        }
      </ul>
      <div>
        <button onClick={() => props.changeFilter('all')}>Alll</button>
        <button onClick={() => props.changeFilter('active')}>Active</button>
        <button onClick={() => props.changeFilter('completed')}>Completed</button>
      </div>
    </div>
  );
}