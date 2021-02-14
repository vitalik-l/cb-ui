import React from 'react';
import clsx from 'clsx';

export const ZoomOutIcon = ({ width = 40, height = 40, className }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 122.68 126.82"
      width={width}
      height={height}
      className={clsx('svg-icon', className)}
    >
      <g fill="currentColor">
        <line
          x1="4.54"
          y1="122.28"
          x2="43.85"
          y2="82.97"
          stroke="currentColor"
          fill="none"
          strokeWidth={12.85}
          strokeMiterlimit={2.61313}
        />
        <circle
          cx="71.78"
          cy="50.9"
          r="44.48"
          stroke="currentColor"
          fill="none"
          strokeWidth={12.85}
          strokeMiterlimit={2.61313}
        />
        <polygon
          stroke="currentColor"
          fill="currentColor"
          fillRule="nonzero"
          strokeWidth={5.14}
          strokeMiterlimit={2.61313}
          points="48.03,55.1 48.03,46.71 95.53,46.71 95.53,55.1 "
        />
      </g>
    </svg>
  );
};
