import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import About from '../pages/About';
import Course from '../pages/Course';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/about" component={About} />
    <Route path="/course" component={Course} />
  </Switch>
);

export default Routes;
