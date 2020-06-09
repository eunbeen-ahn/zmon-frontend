import React from 'react';

interface Props {
  value: string;
  placeholder: string;
  onChange: any;
}

function TextInput({ value, placeholder, onChange }: Props) {
  return <input value={value} placeholder={placeholder} onChange={onChange} />;
}

export default TextInput;
