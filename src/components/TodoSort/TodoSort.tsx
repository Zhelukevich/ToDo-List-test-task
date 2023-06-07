import React, { useContext, useState } from "react";

import './todoSort.css'
import { ITodo } from '../../type/data';
import { todosFilterContext } from '../../context/todosFilterContext';

export interface ITodoSortProps {
  todos: ITodo[]
}

export function TodoSort({ todos }: ITodoSortProps) {
  const { setFilter, setSort } = useContext(todosFilterContext);
  const [toggle, setToggle] = useState(false)

  const handlerFilterAll = (): void => {
    setFilter('ALL')
  }

  const handlerFilterDone = (): void => {
    setFilter('DONE')
  }

  const handlerFilterTodo = (): void => {
    setFilter('TODO')
  }

  const handlerSortData = (): void => {
    setToggle(!toggle)
    if (toggle) {
      setSort('UP_SORT')
    } else {
      setSort('')
    }
  }

  return (
    <div className='sort'>
      <div className='sort__block-btn'>
        <button className='sort__btn' onClick={handlerFilterAll}>Все задачи</button>
        <button className='sort__btn' onClick={handlerFilterDone}>Выполненные</button>
        <button className='sort__btn' onClick={handlerFilterTodo}>Не выполненные</button>
        <button className='sort__btn' onClick={handlerSortData}>По дате выполнения</button>
      </div>
    </div>
  );
}
