import React from "react";
import Greetings from "../../components/atoms/Greeting";

interface Props {
  name: string;
  items?: any[];
}

function HomePresenter ({ name, items }: Props) {
  return (
    <div>
      <Greetings name={name}/>
      <ul>
        {items && items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default HomePresenter;
