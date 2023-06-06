import { ITodo } from '../../type/data';
import { TodoItem } from './TodoItem';
import './todoList.css'


export interface ITodoListProps {
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>
  todos: ITodo[]
  filter: string
}

export function TodoList({ filter, setTodos, todos }: ITodoListProps) {
  const displayItems = todos.filter(item => {
    if (filter === 'ALL') return true;
    if (filter === 'TODO') return !item.complete;
    if (filter === 'DONE') return item.complete;
    return false;
  });

  return (
    <ul>
      {
        displayItems.map(todo => (
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
