import React from 'react';
import clsx from 'clsx';

// local files
import styles from './CgDrawer.module.scss';

export type DrawerProps = {
  open?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const Drawer = (props: DrawerProps) => {
  const { className, open, ...restProps } = props;

  return <div className={clsx(styles.root, className, { [styles.open]: open })} {...restProps} />;
};
