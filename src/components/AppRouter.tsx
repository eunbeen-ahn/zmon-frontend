import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import AppHeader from './app/AppHeader';
import Home from '../pages/Home';

function AppRouter() {
  return (
    <Router>
      <>
        <AppHeader />
        <Switch>
          <Route path="/" exact component={Home} />
          <Redirect from="*" to="/" />
        </Switch>
      </>
    </Router>
  );
}

export default AppRouter;
