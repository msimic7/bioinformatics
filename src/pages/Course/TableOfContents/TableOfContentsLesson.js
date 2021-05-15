import React from 'react';
import PropTypes from 'prop-types';
import { useBreakpoints } from 'react-device-breakpoints';
import { useLocation } from 'react-router';
import history from '../../../services/history';
import classes from '../Course.module.scss';

const TableOfContentsLesson = ({ children, className, to, setShow }) => {
  const device = useBreakpoints();
  const location = useLocation();

  return (
    <div
      className={className}
      aria-hidden
      onClick={() => {
        if (device.isMobile) {
          setShow((val) => !val);
        }
        history.push(to);
        document.querySelector('#scrollToTop').scrollIntoView();
      }}
    >
      {location.pathname === to ? (
        <i className={`fas fa-circle ${classes.lessonIndicator}`} />
      ) : (
        <i className={`far fa-circle ${classes.lessonIndicator}`} />
      )}
      {children}
    </div>
  );
};

TableOfContentsLesson.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
  setShow: PropTypes.func.isRequired,
  className: PropTypes.string,
};

TableOfContentsLesson.defaultProps = {
  children: null,
  className: '',
};

export default TableOfContentsLesson;
