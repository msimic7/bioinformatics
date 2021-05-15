import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Layout from '../Layout';
import classes from './Course.module.scss';
import history from '../../services/history';
import TableOfContents from './TableOfContents';
import Lessons from './Lessons';

const Course = () => {
  const location = useLocation();

  const lessons = [
    'lesson10',
    'lesson11',
    'lesson12',
    'lesson13',
    'lesson14',
    'lesson15',
    'lesson20',
    'lesson21',
    'lesson211',
    'lesson2111',
    'lesson2112',
    'lesson2113',
    'lesson212',
    'lesson213',
    'lesson214',
    'lesson215',
    'lesson216',
    'lesson22',
    'lesson221',
    'lesson222',
    'lesson223',
    'lesson224',
    'lesson23',
    'lesson30',
    'lesson31',
    'lesson32',
    'lesson33',
    'lesson34',
    'lesson35',
    'lesson36',
    'lesson37',
  ];

  const handlePreviousLesson = () => {
    const currentLessonNum = lessons.indexOf(location.pathname.split('/').splice(-1)[0]);
    const previousLessonNum = currentLessonNum === 0 ? lessons.length - 1 : currentLessonNum - 1;
    history.push(`/course/${lessons[previousLessonNum]}`);
  };

  const handleNextLesson = () => {
    const currentLessonNum = lessons.indexOf(location.pathname.split('/').splice(-1)[0]);
    const previousLessonNum = currentLessonNum === lessons.length - 1 ? 0 : currentLessonNum + 1;
    history.push(`/course/${lessons[previousLessonNum]}`);
  };

  return (
    <Layout>
      <div className={classes.root}>
        <TableOfContents />
        <div className={classes.currentLesson}>
          <div className={classes.lessonActionButtons}>
            <div
              aria-hidden="true"
              className={`${classes.btnLink} ${classes.btnLinkLeft}`}
              onClick={() => handlePreviousLesson()}
            >
              <i className="fas fa-arrow-left" />
            </div>
            <div aria-hidden="true" className={classes.btnLink} onClick={() => handleNextLesson()}>
              <i className="fas fa-arrow-right" />
            </div>
          </div>
          <Switch>
            <Route path="/course/lesson10" component={Lessons.Lesson10} />
            <Route path="/course/lesson11" component={Lessons.Lesson11} />
            <Route path="/course/lesson12" component={Lessons.Lesson12} />
            <Route path="/course/lesson13" component={Lessons.Lesson13} />
            <Route path="/course/lesson14" component={Lessons.Lesson14} />
            <Route path="/course/lesson15" component={Lessons.Lesson15} />
            <Route path="/course/lesson20" component={Lessons.Lesson20} />
            <Route path="/course/lesson21" component={Lessons.Lesson21} />
            <Route path="/course/lesson211" component={Lessons.Lesson211} />
            <Route path="/course/lesson2111" component={Lessons.Lesson2111} />
            <Route path="/course/lesson2112" component={Lessons.Lesson2112} />
            <Route path="/course/lesson2113" component={Lessons.Lesson2113} />
            <Route path="/course/lesson212" component={Lessons.Lesson212} />
            <Route path="/course/lesson213" component={Lessons.Lesson213} />
            <Route path="/course/lesson214" component={Lessons.Lesson214} />
            <Route path="/course/lesson215" component={Lessons.Lesson215} />
            <Route path="/course/lesson216" component={Lessons.Lesson216} />
            <Route path="/course/lesson22" component={Lessons.Lesson22} />
            <Route path="/course/lesson221" component={Lessons.Lesson221} />
            <Route path="/course/lesson222" component={Lessons.Lesson222} />
            <Route path="/course/lesson223" component={Lessons.Lesson223} />
            <Route path="/course/lesson224" component={Lessons.Lesson224} />
            <Route path="/course/lesson23" component={Lessons.Lesson23} />
            <Route path="/course/lesson30" component={Lessons.Lesson30} />
            <Route path="/course/lesson31" component={Lessons.Lesson31} />
            <Route path="/course/lesson32" component={Lessons.Lesson32} />
            <Route path="/course/lesson33" component={Lessons.Lesson33} />
            <Route path="/course/lesson34" component={Lessons.Lesson34} />
            <Route path="/course/lesson35" component={Lessons.Lesson35} />
            <Route path="/course/lesson36" component={Lessons.Lesson36} />
            <Route path="/course/lesson37" component={Lessons.Lesson37} />
          </Switch>
        </div>
      </div>
    </Layout>
  );
};

export default Course;
