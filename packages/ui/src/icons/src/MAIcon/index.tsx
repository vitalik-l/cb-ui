import React from 'react';
import clsx from 'clsx';
import { SvgIconProps, SvgIcon } from '@cb-general/core/SvgIcon';

// local files
import styles from './index.module.scss';

export const MAIcon = ({ colored, className, ...restProps }: SvgIconProps & { colored?: boolean }) => {
  return (
    <SvgIcon
      viewBox="0 0 433.67 322.45"
      className={clsx(styles.root, className, {
        [styles.colored]: !!colored,
      })}
      {...restProps}
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
          className={styles.second}
          stroke="currentColor"
          strokeWidth="35.45"
          strokeLinecap="round"
          strokeMiterlimit="2.61313"
          d="M17.73 168.93c234.97,-190.88 222.61,241.49 398.22,-14.64"
        />
      </g>
    </SvgIcon>
  );
};

export const MAIconStyles = styles;
