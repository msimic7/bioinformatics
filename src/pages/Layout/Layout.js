import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../../components/Navbar';
import classes from './Layout.module.scss';

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <div className={classes.footer}>
      <p>Made by Milica Simic and Milan Simic</p>
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node,
};
Layout.defaultProps = {
  children: null,
};

export default Layout;
