import React from 'react';
import classNames from 'classnames';

function ProgressButton({
  className, label, progress, loss, ...others
}) {
  return (
    <button
      className={classNames('cb-progress-button', className, { 'cb-progress-button--loss': loss })}
      data-label={label}
      {...others}
    >
      {label}
      <span style={{ transform: `translateX(${progress}%)` }} />
    </button>
  );
}

export default ProgressButton;
