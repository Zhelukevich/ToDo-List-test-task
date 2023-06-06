import { useState } from 'react';
import { ITodo } from '../type/data';
import { ContainerLayout } from './ContainerLayout';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';

function App() {
  const [todos, setTodos] = useState<ITodo[]>([])

  return (
    <ContainerLayout >
      <h1 className='title'>ToDo List</h1>
      <TodoForm
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList
        items={todos}
      />
    </ContainerLayout>
  );
}

export default App;
