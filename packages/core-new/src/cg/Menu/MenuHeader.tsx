import React from 'react';
import clsx from 'clsx';

// local files
import { MenuItem } from './MenuItem';
import styles from './MenuHeader.module.scss';

export const MenuHeader = (props: any) => {
  const { closeButton, children, className, ...restProps } = props;

  return (
    <MenuItem className={clsx(styles.MenuHeader, className)} {...restProps}>
      <div>{children}</div>
      {closeButton}
    </MenuItem>
  );
};
