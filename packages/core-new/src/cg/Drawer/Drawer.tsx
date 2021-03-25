import React from 'react';
import clsx from 'clsx';

// local files
import styles from './Drawer.module.scss';

export type DrawerProps = {
  open?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const Drawer = (props: DrawerProps) => {
  const { className, open, ...restProps } = props;

  return <div className={clsx(styles.Drawer, className, {[styles.open]: open})} {...restProps} />;
};
