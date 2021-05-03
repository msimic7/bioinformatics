import React from 'react';
import { Link } from 'react-router-dom';
import history from '../../services/history';
import classes from './Navbar.module.scss';

const Navbar = () => {
  const handleClickLogo = (e) => {
    e.preventDefault();
    history.push('/');
  };
  return (
    <div className={classes.root}>
      <div className={classes.logo} onClick={(e) => handleClickLogo(e)} aria-hidden="true">
        <img alt="logo" src="/logo.png" />
      </div>
      <div className={classes.nav}>
        <Link to="/course">Kurs</Link>
        <Link to="/authors">Autori</Link>
      </div>
    </div>
  );
};

export default Navbar;
