import { useEffect, useState } from 'react';
import { ITodo } from '../type/data';
import { ContainerLayout } from './ContainerLayout';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoSort } from './TodoSort';

function App() {
  const [todos, setTodos] = useState<ITodo[]>(LocalStorageData() || [])

  function LocalStorageData() {
    const todosData = localStorage.getItem("todo");
    if (todosData === null) return undefined;
    return JSON.parse(todosData);
  }

  console.log(LocalStorageData());


  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);


  return (
    <ContainerLayout >
      <h1 className='title'>ToDo List</h1>
      <TodoForm
        todos={todos}
        setTodos={setTodos}
      />
      <div>
        <TodoSort />
        <TodoList
          setTodos={setTodos}
          todos={todos}
          items={todos}
        />
      </div>
    </ContainerLayout>
  );
}

export default App;
