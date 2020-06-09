import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import AppHeader from 'components/app/AppHeader';
import Home from 'pages/Home';

const AppRouter = () => (
  <Router>
    <>
      <AppHeader/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Redirect from="*" to="/"/>
      </Switch>
    </>
  </Router>
);

export default AppRouter;
