import React from 'react';
import clsx from 'clsx';

// local files
import styles from './ChartLayout.module.scss';

type Props = {
  className?: string;
  children?: React.ReactNode;
  menuButton?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const ChartLayout = (props: Props) => {
  const { className, menuButton, children, ...restProps } = props;

  return (
    <div className={clsx(styles.ChartLayout, className)} {...restProps}>
      <div className={styles.menuButton}>{menuButton}</div>
      {children}
    </div>
  );
};
