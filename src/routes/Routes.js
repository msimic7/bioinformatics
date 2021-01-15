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
    <Route path="/course/lesson20" component={() => <Course Lesson={Lessons.Lesson20} />} />
    <Route path="/course/lesson21" component={() => <Course Lesson={Lessons.Lesson21} />} />
    <Route path="/course/lesson211" component={() => <Course Lesson={Lessons.Lesson211} />} />
    <Route path="/course/lesson2111" component={() => <Course Lesson={Lessons.Lesson2111} />} />
    <Route path="/course/lesson2112" component={() => <Course Lesson={Lessons.Lesson2112} />} />
    <Route path="/course/lesson2113" component={() => <Course Lesson={Lessons.Lesson2113} />} />
    <Route path="/course/lesson212" component={() => <Course Lesson={Lessons.Lesson212} />} />
    <Route path="/course/lesson213" component={() => <Course Lesson={Lessons.Lesson213} />} />
    <Route path="/course/lesson214" component={() => <Course Lesson={Lessons.Lesson214} />} />
    <Route path="/course/lesson215" component={() => <Course Lesson={Lessons.Lesson215} />} />
    <Route path="/course/lesson216" component={() => <Course Lesson={Lessons.Lesson216} />} />
    <Route path="/course/lesson22" component={() => <Course Lesson={Lessons.Lesson22} />} />
    <Route path="/course/lesson221" component={() => <Course Lesson={Lessons.Lesson221} />} />
    <Route path="/course/lesson222" component={() => <Course Lesson={Lessons.Lesson222} />} />
    <Route path="/course/lesson223" component={() => <Course Lesson={Lessons.Lesson223} />} />
    <Route path="/course/lesson224" component={() => <Course Lesson={Lessons.Lesson224} />} />
    <Route path="/course/lesson23" component={() => <Course Lesson={Lessons.Lesson23} />} />
    <Route path="/course/lesson30" component={() => <Course Lesson={Lessons.Lesson30} />} />
    <Route path="/course/lesson31" component={() => <Course Lesson={Lessons.Lesson31} />} />
    <Route path="/course/lesson32" component={() => <Course Lesson={Lessons.Lesson32} />} />
    <Route path="/course/lesson33" component={() => <Course Lesson={Lessons.Lesson33} />} />
    <Route path="/course/lesson34" component={() => <Course Lesson={Lessons.Lesson34} />} />
    <Route path="/course/lesson35" component={() => <Course Lesson={Lessons.Lesson35} />} />
    <Route path="/course/lesson36" component={() => <Course Lesson={Lessons.Lesson36} />} />
    <Route path="/course/lesson37" component={() => <Course Lesson={Lessons.Lesson37} />} />
  </Switch>
);

export default Routes;
