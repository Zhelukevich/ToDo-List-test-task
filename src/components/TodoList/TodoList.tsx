import { ITodo } from '../../type/data';
import { TodoItem } from './TodoItem';
import './todoList.css'


export interface ITodoListProps {
  items: ITodo[]
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>
  todos: ITodo[]
}

export function TodoList({ items, setTodos, todos }: ITodoListProps) {
  return (
    <ul>
      {
        items.map(todo => (
          <TodoItem
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            todo={todo}
          />
        ))
      }
    </ul>
  );
}
