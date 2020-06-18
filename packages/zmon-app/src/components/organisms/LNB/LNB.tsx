import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Avatar from 'components/atoms/Avatar';
import styles from '.LNB.module.css';

export default withRouter(({ location: { pathname } }) => (
  <nav className={styles.AppNav}>
    <div>{pathname}</div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/todos">Todos</Link>
      </li>
      <li>
        <Link to="/Dashboard">Dashboard</Link>
      </li>
    </ul>
    <Avatar name="test name" imageUrl="test url" />
  </nav>
));
