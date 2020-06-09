import React from 'react';
import TodoForm from 'components/organisms/TodoForm';
import TodoList from 'components/organisms/TodoList';

function TodoPresenter() {
  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
}

export default TodoPresenter;
