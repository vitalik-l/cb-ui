import React from 'react';
import clsx from 'clsx';

// local files
import classes from '../styles/classes.module.scss';
import './MAIcon.scss';

export const MAIcon = ({ width = 40, height = 40, colored, className }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={width}
      height={height}
      viewBox="0 0 433.67 322.45"
      className={clsx('svg-icon', classes.MAIcon, className, {
        [`${classes.MAIcon}_colored`]: !!colored,
      })}
    >
      <g>
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="35.45"
          strokeLinecap="round"
          strokeMiterlimit="2.61313"
          d="M17.73 304.72c234.97,-351.59 222.61,89.25 398.22,-287"
        />
        <path
          fill="none"
          className={`${classes.MAIcon}-second`}
          stroke="currentColor"
          strokeWidth="35.45"
          strokeLinecap="round"
          strokeMiterlimit="2.61313"
          d="M17.73 168.93c234.97,-190.88 222.61,241.49 398.22,-14.64"
        />
      </g>
    </svg>
  );
};
