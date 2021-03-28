import React from 'react';
import clsx from 'clsx';

// local files
import { Drawer, DrawerProps } from '../Drawer';
import styles from './CgMenu.module.scss';

export const Menu = (props: DrawerProps) => {
  const { className, ...restProps } = props;

  return <Drawer className={clsx(styles.root, className)} {...restProps} />;
};
