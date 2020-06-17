import React, { useState } from 'react';
import { useTodosDispatch } from 'packages/zmon-app/src/contexts/TodosContext';
import TextInput from '../atoms/TextInput';

function TodoForm() {
  const [value, setValue] = useState('');
  const dispatch = useTodosDispatch();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      text: value,
    });
    setValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <TextInput
        value={value}
        placeholder="무엇을 하실 건가요?"
        onChange={(e: any) => setValue(e.target.value)}
      />
      <button>등록</button>
    </form>
  );
}

export default TodoForm;
