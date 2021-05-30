import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import classes from './Navbar.module.scss';

const Navbar = () => {
  const history = useHistory();

  const handleClickLogo = (e) => {
    e.preventDefault();
    history.push('/');
  };

  return (
    <div className={classes.root}>
      <div className={classes.logo} onClick={(e) => handleClickLogo(e)} aria-hidden>
        <img alt="logo" src={`${process.env.PUBLIC_URL}/logo.png`} />
      </div>
      <div className={classes.nav}>
        <Link to="/course/lesson10">Kurs</Link>
        <Link to="/authors">Autori</Link>
      </div>
    </div>
  );
};

export default Navbar;
