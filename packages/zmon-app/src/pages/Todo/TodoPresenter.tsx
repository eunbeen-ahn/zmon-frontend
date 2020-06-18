import React from 'react';
import TodoForm from 'components/organisms/TodoForm';
import TodoList from 'components/organisms/TodoList';
import PageTemplate from 'components/templates/PageTemplate/PageTemplate';

function TodoPresenter() {
  return (
    <PageTemplate>
      <TodoForm />
      <TodoList />
    </PageTemplate>
  );
}

export default TodoPresenter;
