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
      // fetch('/api/tasks', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(todos),
      // }).then(res => res.json())
      //   .then(res => console.log(res))
      //   .catch(err => console.log(err))

      setTodos([...todos, {
        id: Date.now(),
        title: titleValue,
        description: descrValue,
        complete: false,
        edit: false,
        completionDates: '',
        filter: 'ALL',
        sort: ''
      }])
      setTitleValue('');
      setDescrValue('');
    }

  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='form__block'>
        <input
          className='input'
          onKeyDown={handleKeyDown}
          onChange={handleTitleChange}
          placeholder='Название'
          type="text"
          value={titleValue}
        />
        <input
          className='input'
          onKeyDown={handleKeyDown}
          onChange={handleDescrChange}
          value={descrValue}
          placeholder='Описание'
          type="text"
        />
      </div>
      <button
        className='form__btn'
        onClick={addTodo}
      >
        Добавить
      </button>
    </form>
  );
}
