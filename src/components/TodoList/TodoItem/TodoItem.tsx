import { useState } from 'react';
import { ITodo } from '../../../type/data';
import './todoItem.css'
import { currentDate } from '../../../utils/currentDate';


interface ITodoItemProps {
  todo: ITodo
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>
  todos: ITodo[]
}

export function TodoItem({ todo, setTodos, todos }: ITodoItemProps) {
  const [title, seTtitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  const [completionDates, setCompletionDates] = useState(currentDate());

  function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    seTtitle(event.target.value);
  }

  function handleDescriptionChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDescription(event.target.value);
  }

  const removeTodo = (id: number): void => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTodo = (id: number): void => {
    setTodos(todos.map(todo => {
      if (todo.id !== id) return todo;
      return {
        ...todo,
        complete: !todo.complete,
        completionDates: completionDates
      }
    }))
  }

  const editTodo = (id: number): void => {
    setTodos(todos.map(todo => {
      if (todo.id !== id) return todo;
      return {
        ...todo,
        edit: !todo.edit,
        title: title,
        description: description,
        completionDates: completionDates
      }
    }))
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {

    if (e.key === 'Enter') {

    }

  }

  return (
    <li className='todo__item'>
      <input
        className='todo__checkbox'
        type="checkbox"
        checked={todo.complete}
        onChange={() => toggleTodo(todo.id)}
      />
      {todo.complete &&
        <p className='todo__completionDates'>
          {todo.completionDates}
        </p>
      }
      <hgroup className='todo__hgroup'>
        {todo.edit ?
          <input
            className='todo__edit-input'
            type="text"
            value={title}
            onKeyDown={handleKeyDown}
            onChange={handleTitleChange}
          />
          :
          <h2 className='input__title'>{todo.title}</h2>
        }
        {todo.edit ?
          <input
            className='todo__edit-input'
            type="text"
            value={description}
            onKeyDown={handleKeyDown}
            onChange={handleDescriptionChange}
          />
          :
          <p className='input__descr'>{todo.description}</p>
        }
      </hgroup>
      <div className='todo__block-btn'>
        <button className='todo__btn' onClick={() => editTodo(todo.id)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="20px" height="20px">
            <path d="M 79.335938 15.667969 C 78.064453 15.622266 76.775 15.762109 75.5 16.099609 C 72.1 16.999609 69.299609 19.199219 67.599609 22.199219 L 64 28.699219 C 63.2 30.099219 63.699609 32.000781 65.099609 32.800781 L 82.400391 42.800781 C 82.900391 43.100781 83.400391 43.199219 83.900391 43.199219 C 84.200391 43.199219 84.399219 43.199609 84.699219 43.099609 C 85.499219 42.899609 86.1 42.399219 86.5 41.699219 L 90.199219 35.199219 C 91.899219 32.199219 92.4 28.700781 91.5 25.300781 C 90.6 21.900781 88.400391 19.100391 85.400391 17.400391 C 83.525391 16.337891 81.455078 15.744141 79.335938 15.667969 z M 60.097656 38.126953 C 59.128906 38.201172 58.199219 38.724609 57.699219 39.599609 L 27.5 92 C 24.1 97.8 22.200781 104.30039 21.800781 110.90039 L 21 123.80078 C 20.9 124.90078 21.5 125.99961 22.5 126.59961 C 23 126.89961 23.5 127 24 127 C 24.6 127 25.199219 126.8 25.699219 126.5 L 36.5 119.40039 C 42 115.70039 46.7 110.8 50 105 L 80.300781 52.599609 C 81.100781 51.199609 80.599219 49.3 79.199219 48.5 C 77.799219 47.7 75.899609 48.199609 75.099609 49.599609 L 44.800781 102 C 41.900781 106.9 37.899609 111.20039 33.099609 114.40039 L 27.300781 118.19922 L 27.699219 111.30078 C 27.999219 105.60078 29.699609 100 32.599609 95 L 62.900391 42.599609 C 63.700391 41.199609 63.200781 39.3 61.800781 38.5 C 61.275781 38.2 60.678906 38.082422 60.097656 38.126953 z M 49 121 C 47.3 121 46 122.3 46 124 C 46 125.7 47.3 127 49 127 L 89 127 C 90.7 127 92 125.7 92 124 C 92 122.3 90.7 121 89 121 L 49 121 z M 104 121 A 3 3 0 0 0 101 124 A 3 3 0 0 0 104 127 A 3 3 0 0 0 107 124 A 3 3 0 0 0 104 121 z" /></svg>
        </button>
        <button className='todo__btn' onClick={() => removeTodo(todo.id)}>
          <svg viewBox="0 0 24 24" >
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z">
            </path>
          </svg>
        </button>
      </div>
    </li >
  );
}
