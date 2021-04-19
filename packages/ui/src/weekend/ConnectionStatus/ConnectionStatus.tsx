import React from 'react';
import clsx from 'clsx';

// local files
import styles from './WkdConnectionStatus.module.scss';

type Props = {
  className?: string;
  online?: boolean;
};

export const ConnectionStatus = (props: Props) => {
  const { className, online, ...restProps } = props;

  return <div className={clsx(styles.root, className, online && styles.online)} {...restProps} />;
};
