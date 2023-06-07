import React, { useState } from "react";
import { ITodo } from '../type/data';

interface ITodosFilterContext {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  todosFilter: ITodo[];
  setSort: React.Dispatch<React.SetStateAction<string>>
}

const ICurrentContextState = {
  setFilter: () => { },
  setSort: () => { },
  todosFilter: []
}

export const todosFilterContext = React.createContext<ITodosFilterContext>(ICurrentContextState);

export function TodosFilterProvider({ children, todos }: { children: React.ReactNode, todos: ITodo[] }) {
  const [filter, setFilter] = useState('ALL');
  const [sort, setSort] = useState('UP_SORT')

  const todosFilter = todos.filter((item: ITodo) => {
    if (filter === 'ALL') {
      return true;
    }
    if (filter === 'TODO') {
      return !item.complete;
    }
    if (filter === 'DONE') {
      return item.complete;
    }
    return false;
  });

  if (sort === 'UP_SORT') {
    todosFilter.sort((x: ITodo, y: ITodo) => new Date(y.completionDates).getTime() - new Date(x.completionDates).getTime())
  }

  return (
    <todosFilterContext.Provider value={{ todosFilter, setFilter, setSort }}>
      {children}
    </todosFilterContext.Provider>
  )
}