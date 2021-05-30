/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Breakpoints } from 'react-device-breakpoints';
import Routes from './routes';

const breakpoints = {
  isDesktop: '(min-width: 1024px)',
  isTablet: '(min-width: 768px)',
  isMobile: '(max-width: 767px)',
};

const App = () => (
  <BrowserRouter basename="/bioinformatika">
    <Breakpoints {...breakpoints}>
      <Routes />
    </Breakpoints>
  </BrowserRouter>
);

export default App;
