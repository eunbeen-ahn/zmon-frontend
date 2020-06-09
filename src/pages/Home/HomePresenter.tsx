import React from "react";
import Greetings from "../../components/atoms/Greeting";

interface Props {
  name: string;
}

function HomePresenter ({ name }: Props) {
  return <Greetings name={name}/>
}

export default HomePresenter;
