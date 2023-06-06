import { FormEvent, useState } from 'react';
import './todoForm.css'
import { ITodo } from '../../type/data';


export interface ITodoFormProps {
  todos: ITodo[]
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>
}

export function TodoForm({ todos, setTodos }: ITodoFormProps) {
  const [titleValue, setTitleValue] = useState('');
  const [descrValue, setDescrValue] = useState('');

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(event.target.value);
  }

  const handleDescrChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescrValue(event.target.value);
  }


  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();;
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {

    if (e.key === 'Enter') {
      addTodo()
    }

  }

  const addTodo = () => {
    if (titleValue && descrValue) {
      setTodos([...todos, {
        id: Date.now(),
        title: titleValue,
        description: descrValue,
        complete: false,
        edit: false,
        completionDates: '',
      }])
      setTitleValue('');
      setDescrValue('');
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onKeyDown={handleKeyDown}
        onChange={handleTitleChange}
        placeholder='Название'
        type="text"
        value={titleValue}
      />
      <input
        onKeyDown={handleKeyDown}
        onChange={handleDescrChange}
        value={descrValue}
        placeholder='Описание'
        type="text"
      />
      <button
        onClick={addTodo}
      >
        Добавить
      </button>
    </form>
  );
}
