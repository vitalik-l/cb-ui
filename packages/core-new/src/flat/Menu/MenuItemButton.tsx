import React from 'react';
import clsx from 'clsx';
import { ButtonBase } from '@cb-general/core/ButtonBase';

// local files
import { MenuItem } from './MenuItem';
import { NavIcon } from '../icons';
import styles from './FlatMenuItemButton.module.scss';

export const MenuItemButton = (props: any) => {
  const { children, icon, className, classes, ...restProps } = props;

  return (
    <MenuItem
      component={ButtonBase}
      className={clsx(styles.MenuItemButton, classes.root, className)}
      {...restProps}
    >
      {children}
      {!!icon && React.cloneElement(icon, { className: clsx(styles.icon, classes.icon) })}
    </MenuItem>
  );
};

MenuItemButton.defaultProps = {
  icon: <NavIcon />,
  classes: {},
};
