import React from 'react';
import clsx from 'clsx';

// local files
import styles from './DesktopLayout.module.scss';

type Props = {
  className?: string;
};

export const DesktopLayout = (props: Props) => {
  const { className } = props;

  return <div className={clsx(styles.root, className)} />;
};
