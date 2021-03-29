import React from 'react';
import clsx from 'clsx';

// local files
import styles from './WkdCountdown.module.scss';

type Props = {
  className?: string;
  value?: string | number;
};

export const Countdown = (props: Props) => {
  const { className, value } = props;

  return <div className={clsx(styles.root, className)}>{value}</div>;
};
