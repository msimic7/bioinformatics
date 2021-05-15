import React from 'react';
import PropTypes from 'prop-types';
import { useBreakpoints } from 'react-device-breakpoints';
import history from '../../../services/history';

const TableOfContentsLesson = ({ children, className, to, setShow }) => {
  const device = useBreakpoints();

  return (
    <div
      className={className}
      aria-hidden
      onClick={() => {
        if (device.isMobile) {
          setShow((val) => !val);
        }
        history.push(to);
      }}
    >
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
