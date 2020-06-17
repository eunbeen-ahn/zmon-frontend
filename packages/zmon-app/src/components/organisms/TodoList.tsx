import React from 'react';
import TodoItem from '../molecules/TodoItem';
import { useTodosState } from 'packages/zmon-app/src/contexts/TodosContext';

function TodoList() {
  const todos = useTodosState();
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;
