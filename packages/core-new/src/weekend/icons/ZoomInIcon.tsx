import React from 'react';
import clsx from 'clsx';

export const ZoomInIcon = ({ width = 40, height = 40, className }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 79.68 82.36"
      width={width}
      height={height}
      className={clsx('svg-icon', className)}
    >
      <g fill="currentColor">
        <line
          x1="2.95"
          y1="79.41"
          x2="28.48"
          y2="53.88"
          fill="none"
          stroke="currentColor"
          strokeWidth={8.35}
          strokeMiterlimit={2.61313}
        />
        <circle
          cx="46.62"
          cy="33.06"
          r="28.89"
          fill="none"
          stroke="currentColor"
          strokeWidth={8.35}
          strokeMiterlimit={2.61313}
        />
        <polygon
          stroke="currentColor"
          fill="currentColor"
          fillRule="nonzero"
          strokeWidth={1.67}
          strokeMiterlimit={2.61313}
          points="43.79,49.18 43.79,35.82 30.49,35.82 30.49,30.23 43.79,30.23 43.79,16.94 49.45,16.94 49.45,30.23 62.74,30.23 62.74,35.82 49.45,35.82 49.45,49.18 "
        />
      </g>
    </svg>
  );
};
