import React from 'react';
import clsx from 'clsx';

// local files
import styles from './RouletteWheel.module.scss';

type Props = {
  className?: string;
};

export const RouletteWheel = (props: Props) => {
  const { className } = props;

  return <div className={clsx(styles.root, className)} />;
};
