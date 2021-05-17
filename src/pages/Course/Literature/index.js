import React from 'react';
import PropTypes, { string } from 'prop-types';
import classes from '../Lessons/Lesson.module.scss';

const Literature = ({ img, title, url, customClass }) => (
  <div className={`${classes.literatureItem} ${customClass}`}>
    <img
      alt=""
      src={`/assets/material-sources/${img}.svg`}
      className={`${classes.mr4} ${classes.mb4}`}
    />
    <div className={classes.materialText}>
      <div>{title}</div>
      {url && (
        <a href={url} className={classes.materialLink} target="_blank" rel="noreferrer">
          link
        </a>
      )}
    </div>
  </div>
);

Literature.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  customClass: string,
};

Literature.defaultProps = {
  customClass: '',
};

export default Literature;
