import { ITodo } from '../../type/data';
import './todoItem.css'


interface ITodoItemProps {
  todo: ITodo
}

export function TodoItem({ todo }: ITodoItemProps) {
  return (
    <li className='item'>
      <input type="checkbox" />
      <hgroup>
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
      </hgroup>
      <button>x</button>
    </li>
  );
}
