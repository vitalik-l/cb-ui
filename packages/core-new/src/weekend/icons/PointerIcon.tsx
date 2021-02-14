import React from 'react';
import clsx from 'clsx';

export const PointerIcon = ({ width = '40', height = '40', className }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 85 154.73"
      className={clsx('svg-icon', className)}
    >
      <g>
        <line
          fill="none"
          stroke="currentColor"
          strokeWidth="21.43"
          strokeMiterlimit="2.61313"
          x1="51.45"
          y1="89.97"
          x2="79.95"
          y2="139.33"
        />
        <polygon
          fill="currentColor"
          points="67,91.04 96.49,142.13 74.66,154.73 45.17,103.64 12.78,122.34 -0,0 101.69,71.01 "
        />
      </g>
    </svg>
  );
};
