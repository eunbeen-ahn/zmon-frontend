import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import 'packages/zmon-app/src/styles/App.css';
import Avatar from 'components/atoms/Avatar';

export default withRouter(({ location: { pathname } }) => (
  <header className="App-header">
    <div>{pathname}</div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/todos">Todos</Link>
      </li>
    </ul>
    <Avatar name="test name" imageUrl="test url" />
  </header>
));
