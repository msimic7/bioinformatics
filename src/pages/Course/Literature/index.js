/* eslint-disable react/prop-types */
import React from 'react';
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

export default Literature;
