import React from 'react';
import Layout from '../Layout';
import classes from './Dashboard.module.scss';
import history from '../../services/history';

const Dashboard = () => {
  const handleGetStarted = (e) => {
    e.preventDefault();
    history.push('/course/lesson10');
  };

  return (
    <Layout>
      <div className={classes.root}>
        <div className={classes.contentWrapper}>
          <div className={classes.introductionMsg}>Introduction to bioinformatics algorithms</div>
          <button
            type="button"
            className={classes.btnStartCourse}
            onClick={(e) => handleGetStarted(e)}
          >
            Get started
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
