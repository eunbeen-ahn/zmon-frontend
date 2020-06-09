import React from 'react';
import Greetings from 'components/atoms/Greeting';
import PageTemplate from 'components/templates/PageTemplate';

interface Props {
  name: string;
  items?: any[];
}

function HomePresenter({ name, items }: Props) {
  return (
    <PageTemplate>
      <div>
        <Greetings name={name} />
        <ul>
          {items && items.map((item) => <li key={item.id}>{item.name}</li>)}
        </ul>
      </div>
    </PageTemplate>
  );
}

export default HomePresenter;
