import React from 'react';
import 'packages/zmon-app/src/pages/Todo/Todo.css';
import { Todo, useTodosDispatch } from 'contexts/TodosContext';

export type TodoItemProps = {
  todo: Todo;
};

function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useTodosDispatch();
  const onToggle = () => {
    dispatch({
      type: 'TOGGLE',
      id: todo.id,
    });
  };

  const onRemove = () => {
    dispatch({
      type: 'REMOVE',
      id: todo.id,
    });
  };

  return (
    <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
      <span className="text" onClick={onToggle}>
        {todo.text}
      </span>
      <button className="remove" onClick={onRemove}>
        (X)
      </button>
    </li>
  );
}

export default TodoItem;
