import React from 'react';
import clsx from 'clsx';

export const PauseIcon = ({ width = '40', height = '40', className }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 365 365"
      className={clsx('svg-icon', className)}
    >
      <g fill="currentColor">
        <rect x="74.5" width="73" height="365" />
        <rect x="217.5" width="73" height="365" />
      </g>
    </svg>
  );
};
