import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function ProgressButton({ className, label, progress, loss, ...otherProps }) {
  return (
    <button
      className={classNames('cb-progress-button', className, { 'cb-progress-button--loss': loss })}
      data-label={label}
      type="button"
      {...otherProps}
    >
      {label}
      <span style={{ transform: `translateX(${progress}%)` }} />
    </button>
  );
}

ProgressButton.propTypes = {
  className: PropTypes.string,
  label: PropTypes.node,
  progress: PropTypes.number,
  loss: PropTypes.bool,
};

export default ProgressButton;
