import React from 'react';
import clsx from 'clsx';

// local files
import styles from './Header.module.scss';

type Props = {
  className?: string;
  centerContent?: React.ReactNode;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
};

export const Header = (props: Props) => {
  const { className, leftContent, centerContent, rightContent } = props;

  return (
    <div className={clsx(styles.Header, className)}>
      <div className={styles.item}>{leftContent}</div>
      <div className={clsx(styles.item, styles.itemCenter)}>{centerContent}</div>
      <div className={clsx(styles.item, styles.itemRight)}>{rightContent}</div>
    </div>
  );
};
