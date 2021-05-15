import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Authors from '../pages/Authors';
import Course from '../pages/Course';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/authors" component={Authors} />
    <Route exact path="/course/:lesson" component={Course} />
  </Switch>
);

export default Routes;
