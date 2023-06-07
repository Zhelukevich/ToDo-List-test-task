import { useEffect, useState } from 'react';
import { ITodo } from '../type/data';
import { ContainerLayout } from './ContainerLayout';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoSort } from './TodoSort';

import './app.css'
import { TodosFilterProvider } from '../context/todosFilterContext';

function App() {
  const [todos, setTodos] = useState<ITodo[]>(LocalStorageData() || [])

  function LocalStorageData() {
    const todosData = localStorage.getItem("todo");
    if (todosData === null) return undefined;
    return JSON.parse(todosData);
  }

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);


  return (
    <TodosFilterProvider todos={todos}>
      <ContainerLayout >
        <h1 className='title'>ToDo List</h1>
        <TodoForm
          todos={todos}
          setTodos={setTodos}
        />
        <div>
          <TodoSort
            todos={todos}
          />
          <TodoList
            setTodos={setTodos}
            todos={todos}
          />
        </div>
      </ContainerLayout>
    </TodosFilterProvider>
  );
}

export default App;
