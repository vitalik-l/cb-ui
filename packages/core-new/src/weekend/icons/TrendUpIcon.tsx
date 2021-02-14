import React from 'react';
import clsx from 'clsx';

export const TrendUpIcon = ({ width = '40', height = '40', className, ...restProps }: any) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 85.000000 90.000000"
      preserveAspectRatio="xMidYMid meet"
      className={clsx('svg-icon', className)}
      {...restProps}
    >
      <g
        transform="translate(0.000000,90.000000) scale(0.100000,-0.100000)"
        fill="currentcolor"
        stroke="none"
      >
        <path d="M597 828 l62 -63 -116 -123 -116 -123 -70 68 -69 68 -134 -140 -134 -140 42 -42 42 -43 98 97 98 98 65 -65 66 -65 67 70 c37 39 107 112 155 164 l89 94 49 -49 50 -49 -3 150 -3 150 -150 3 -150 3 62 -63z" />
        <path d="M676 509 l-66 -70 2 -207 3 -207 110 0 110 0 2 235 2 235 -48 42 -49 43 -66 -71z" />
        <path d="M503 328 c-55 -56 -88 -57 -141 -5 -21 21 -41 37 -45 37 -4 0 -6 -75 -5 -167 l3 -168 113 -3 c86 -2 114 0 117 11 3 7 4 86 3 175 l-3 163 -42 -43z" />
        <path d="M193 278 c-45 -45 -58 -53 -88 -52 -23 1 -45 10 -61 25 l-25 23 3 -124 3 -125 108 -3 c82 -2 109 0 112 11 3 7 4 77 3 155 l-3 143 -52 -53z" />
      </g>
    </svg>
  );
};
