import React from 'react';
import clsx from 'clsx';

// local files
import styles from './WkdTicker.module.scss';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export const Ticker = (props: Props) => {
  const { className, children, ...restProps } = props;

  return (
    <div className={clsx(styles.root, className)} {...restProps}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
