import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Todo = lazy(() => import('./pages/Todo'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/todos" exact component={Todo} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Redirect from="*" to="/" />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
