import { useEffect, useState } from 'react';
import { ITodo } from '../type/data';
import { ContainerLayout } from './ContainerLayout';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';

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

  const removeTodo = (id: number): void => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTodo = (id: number): void => {
    setTodos(todos.map(todo => {
      if (todo.id !== id) return todo;

      return {
        ...todo,
        complete: !todo.complete,
      }
    }))
  }

  return (
    <ContainerLayout >
      <h1 className='title'>ToDo List</h1>
      <TodoForm
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
        items={todos}
      />
    </ContainerLayout>
  );
}

export default App;
