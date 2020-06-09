import React from 'react';
import HomePresenter from './HomePresenter';

const loggedInUserName: string = 'zmon';

function HomeContainer() {
  return <HomePresenter name={loggedInUserName}/>
}

export default HomeContainer;
