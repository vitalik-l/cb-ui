import React from 'react';

// local files
import styles from './WkdCountdown.module.scss';

type Props = {
  className?: string;
  value?: string | number;
  label?: string;
};

export const Countdown = (props: Props) => {
  const { className, value, label, ...restProps } = props;

  return (
    <div className={className} {...restProps}>
      {!!label && <div className={styles.label}>{label}</div>}
      <div className={styles.root}>{value}</div>
    </div>
  );
};
