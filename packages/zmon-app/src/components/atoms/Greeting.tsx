import React from 'react';

interface Props {
  name: string;
  mark: string;
}

function Greetings({ name, mark }: Props) {
  return (
    <div>
      Hello, {name} {mark}
    </div>
  );
}

Greetings.defaultProps = {
  mark: '!',
};

export default Greetings;
