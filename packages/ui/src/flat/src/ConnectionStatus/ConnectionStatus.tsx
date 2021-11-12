import clsx from 'clsx';
import React from 'react';
import styles from './FlatConnectionStatus.module.scss';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  online?: boolean;
};

export const ConnectionStatus = (props: Props) => {
  const { className, online, ...restProps } = props;

  return <div className={clsx(styles.root, className, online && styles.online)} {...restProps} />;
};
