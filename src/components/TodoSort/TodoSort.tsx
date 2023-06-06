import React from "react";

export interface ITodoSortProps {
  setFilter: React.Dispatch<React.SetStateAction<string>>
}

export function TodoSort({ setFilter }: ITodoSortProps) {

  const handlerFilterAll = (): void => {
    setFilter('ALL')
  }

  const handlerFilterDone = (): void => {
    setFilter('DONE')
  }

  const handlerFilterTodo = (): void => {
    setFilter('TODO')
  }

  return (
    <div>
      <button onClick={handlerFilterAll}>Все задачи</button>
      <button onClick={handlerFilterDone}>Выполненные</button>
      <button onClick={handlerFilterTodo}>Не выполненные</button>
    </div>
  );
}
