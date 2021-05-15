/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Router } from 'react-router-dom';
import { Breakpoints } from 'react-device-breakpoints';
import Routes from './routes';
import history from './services/history';

const breakpoints = {
  isDesktop: '(min-width: 1024px)',
  isTablet: '(min-width: 768px)',
  isMobile: '(max-width: 767px)',
};

const App = () => (
  <Router history={history}>
    <Breakpoints {...breakpoints}>
      <Routes />
    </Breakpoints>
  </Router>
);

export default App;
