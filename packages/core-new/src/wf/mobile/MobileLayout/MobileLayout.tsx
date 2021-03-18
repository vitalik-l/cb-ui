import React from 'react';
import clsx from 'clsx';

// local files
import styles from './MobileLayout.module.scss';

type Props = {
  className?: string;
};

export const MobileLayout = (props: Props) => {
  const { className } = props;

  return <div className={clsx(styles.MobileLayout, className)} />;
};
