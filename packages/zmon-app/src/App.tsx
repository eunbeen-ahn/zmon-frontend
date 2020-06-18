import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Home from './pages/Home';
import Todo from './pages/Todo';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/todos" exact component={Todo} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
