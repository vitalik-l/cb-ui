import React from 'react';
import clsx from 'clsx';

// local files
import styles from './WkdCountdown.module.scss';

type Props = {
  className?: string;
  value?: string | number;
  label?: string;
};

export const Countdown = (props: Props) => {
  const { className, value, label } = props;

  return (
    <div className={className}>
      {!!label && <div className={styles.label}>{label}</div>}
      <div className={styles.root}>{value}</div>
    </div>
  );
};
