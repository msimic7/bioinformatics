import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../../components/Navbar';
import classes from './Layout.module.scss';

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <div className={classes.footer}>Made by Milica Simić and Milan Simić</div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node,
};
Layout.defaultProps = {
  children: null,
};

export default Layout;
