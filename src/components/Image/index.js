import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Viewer from 'react-viewer';
import classes from './Image.module.scss';

const Image = ({ src, alt, className }) => {
  const [show, setShow] = useState(false);

  return (
    <div className={`${classes.root} ${className}`}>
      <img
        alt={alt}
        src={`${process.env.PUBLIC_URL}${src}`}
        aria-hidden="true"
        onClick={() => setShow(true)}
      />
      <Viewer
        visible={show}
        onClose={() => setShow(false)}
        images={[{ src, alt }]}
        loop={false}
        showTotal={false}
        scalable={false}
        attribute={false}
        changeable={false}
        zoomable={false}
        noNavbar
      />
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
};

Image.defaultProps = {
  alt: '',
  className: '',
};

export default Image;
