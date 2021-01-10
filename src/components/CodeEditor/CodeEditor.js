import React, { useState } from 'react';
import PropTypes from 'prop-types';
import copy from 'copy-to-clipboard';
import classes from './CodeEditor.module.scss';

const CodeEditor = ({ code, result, customClass }) => {
  const [isRun, setIsRun] = useState(false);

  const handleRun = () => {
    setIsRun(true);
  };

  const handleCopyToClipboard = () => {
    copy(code);
  };

  return (
    <div className={`${classes.root} ${customClass}`}>
      <pre>{code}</pre>
      <div className={classes.options}>
        {result !== '' && (
          <span aria-hidden="true" className={classes.codeActions} onClick={handleRun}>
            <i className="fas fa-play" />
          </span>
        )}
        <span aria-hidden="true" className={classes.codeActions} onClick={handleCopyToClipboard}>
          <i className="far fa-copy" />
        </span>
      </div>
      {isRun && result !== '' && <pre>{result}</pre>}
    </div>
  );
};

CodeEditor.propTypes = {
  code: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
  customClass: PropTypes.string,
};

CodeEditor.defaultProps = {
  customClass: '',
};

export default CodeEditor;
