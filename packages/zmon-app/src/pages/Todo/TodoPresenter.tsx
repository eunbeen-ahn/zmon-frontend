import React from 'react';
import TodoForm from 'packages/zmon-app/src/components/organisms/TodoForm';
import TodoList from 'packages/zmon-app/src/components/organisms/TodoList';
import PageTemplate from 'packages/zmon-app/src/components/templates/PageTemplate';

function TodoPresenter() {
  return (
    <PageTemplate>
      <TodoForm />
      <TodoList />
    </PageTemplate>
  );
}

export default TodoPresenter;
