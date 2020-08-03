import React from 'react';
import classNames from 'classnames';

function CloseIcon({
  width = '13', height = '13', className, ...props
}) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 13 13"
      width={width}
      height={height}
      className={classNames('close-icon', className)}
      fill="currentcolor"
    >
      <path d="M5.182 6.596l-3.889-3.889-.707-.707 1.414-1.414.707.707 3.889 3.889 3.889-3.889.707-.707 1.414 1.414-.707.707-3.889 3.889 3.889 3.889.707.707-1.414 1.414-.707-.707-3.889-3.889-3.889 3.889-.707.707-1.414-1.414.707-.707 3.889-3.889z" />
    </svg>
  );
}

export default CloseIcon;
