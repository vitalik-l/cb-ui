import React from 'react';
import clsx from 'clsx';

export const CrosshairIcon = ({ width = '40', height = '40', className }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1839.77 1839.77"
      width={width}
      height={height}
      className={clsx('svg-icon', className)}
    >
      <g fill="currentColor">
        <rect x="801.84" y="-0" width="236.07" height="700.09" />
        <rect
          transform="matrix(2.64845E-14 1 -1 2.64845E-14 1839.77 801.852)"
          width="236.07"
          height="700.09"
        />
        <rect x="801.84" y="1139.68" width="236.07" height="700.09" />
        <rect
          transform="matrix(2.64845E-14 1 1 -2.64845E-14 -0.00461513 801.852)"
          width="236.07"
          height="700.09"
        />
      </g>
    </svg>
  );
};
