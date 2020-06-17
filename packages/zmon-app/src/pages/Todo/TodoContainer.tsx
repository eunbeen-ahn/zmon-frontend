import React from 'react';
import TodoPresenter from './TodoPresenter';
import { TodosContextProvider } from 'packages/zmon-app/src/contexts/TodosContext';

function TodoContainer() {
  return (
    <TodosContextProvider>
      <TodoPresenter />
    </TodosContextProvider>
  );
}

export default TodoContainer;
