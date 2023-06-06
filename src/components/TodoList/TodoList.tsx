import { ITodo } from '../../type/data';
import { TodoItem } from '../TodoItem';
import './todoList.css'


export interface ITodoListProps {
  items: ITodo[]

}

export function TodoList({ items }: ITodoListProps) {
  return (
    <ul>
      {
        items.map(todo => <TodoItem key={todo.id} todo={todo} />)
      }
    </ul>
  );
}
