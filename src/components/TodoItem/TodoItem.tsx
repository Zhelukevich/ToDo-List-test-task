import { log } from 'console';
import { ITodo } from '../../type/data';
import './todoItem.css'


interface ITodoItemProps {
  todo: ITodo
  removeTodo: (id: number) => void
  toggleTodo: (id: number) => void
}

export function TodoItem({ todo, removeTodo, toggleTodo }: ITodoItemProps) {

  return (
    <li className='item'>
      <input type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo.id)} />
      <p>{todo.completionDates}</p>
      <hgroup>
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
      </hgroup>
      <button onClick={() => removeTodo(todo.id)}>x</button>
    </li>
  );
}
