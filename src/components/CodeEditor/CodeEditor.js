import React, { useState } from 'react';
import PropTypes from 'prop-types';
import copy from 'copy-to-clipboard';
import classes from './CodeEditor.module.scss';

const CodeEditor = ({ code, result, copyable, customClass }) => {
  const [isRun, setIsRun] = useState(false);

  const handleRun = () => {
    setIsRun(true);
  };

  const handleCopyToClipboard = () => {
    copy(code);
  };

  return (
    <div className={`${classes.root} ${customClass}`}>
      <div className={classes.options}>
        Code
        <div className={classes.actions}>
          {result !== '' && (
            <span aria-hidden="true" className={classes.codeActions} onClick={handleRun}>
              <i className="fas fa-play" />
            </span>
          )}
          {copyable && (
            <span
              aria-hidden="true"
              className={classes.codeActions}
              onClick={handleCopyToClipboard}
            >
              <i className="far fa-copy" />
            </span>
          )}
        </div>
      </div>
      <pre className={classes.code}>{code}</pre>
      {isRun && result !== '' && (
        <div className={classes.console}>
          <p>Console</p>
          <pre>{result}</pre>
        </div>
      )}
    </div>
  );
};

CodeEditor.propTypes = {
  code: PropTypes.string.isRequired,
  result: PropTypes.string,
  copyable: PropTypes.bool,
  customClass: PropTypes.string,
};

CodeEditor.defaultProps = {
  customClass: '',
  result: '',
  copyable: true,
};

export default CodeEditor;
