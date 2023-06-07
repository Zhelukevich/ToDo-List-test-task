import { useContext } from 'react';
import { ITodo } from '../../type/data';
import { TodoItem } from './TodoItem';

import './todoList.css'
import { todosFilterContext } from '../../context/todosFilterContext';


export interface ITodoListProps {
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>
  todos: ITodo[]
}

export function TodoList({ setTodos, todos }: ITodoListProps) {
  const { todosFilter } = useContext(todosFilterContext);

  return (
    <ul className='todo__list'>
      {
        todosFilter.map(todo => (
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
