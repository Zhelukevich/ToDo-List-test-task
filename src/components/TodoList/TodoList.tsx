import { ITodo } from '../../type/data';
import { TodoItem } from '../TodoItem';
import './todoList.css'


export interface ITodoListProps {
  items: ITodo[]
  removeTodo: (id: number) => void
  toggleTodo: (id: number) => void
}

export function TodoList({ items, removeTodo, toggleTodo }: ITodoListProps) {
  return (
    <ul>
      {
        items.map(todo => (
          <TodoItem
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            key={todo.id}
            todo={todo}
          />
        ))
      }
    </ul>
  );
}
