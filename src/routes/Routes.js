import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import About from '../pages/About';
import Course from '../pages/Course';
import Lessons from '../pages/Course/Lessons';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/about" component={About} />
    <Route exact path="/course" component={() => <Course Lesson={Lessons.Lesson10} />} />
    <Route path="/course/lesson10" component={() => <Course Lesson={Lessons.Lesson10} />} />
    <Route path="/course/lesson11" component={() => <Course Lesson={Lessons.Lesson11} />} />
    <Route path="/course/lesson12" component={() => <Course Lesson={Lessons.Lesson12} />} />
    <Route path="/course/lesson13" component={() => <Course Lesson={Lessons.Lesson13} />} />
    <Route path="/course/lesson14" component={() => <Course Lesson={Lessons.Lesson14} />} />
    <Route path="/course/lesson15" component={() => <Course Lesson={Lessons.Lesson15} />} />
  </Switch>
);

export default Routes;
