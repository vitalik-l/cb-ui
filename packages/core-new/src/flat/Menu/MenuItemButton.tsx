import React from 'react';
import clsx from 'clsx';
import { ButtonBase } from '@cb-general/core/ButtonBase';

// local files
import { MenuItem } from './MenuItem';
import { NavIcon } from '../icons';
import styles from './FlatMenuItemButton.module.scss';

export const MenuItemButton = (props: any) => {
  const { label, icon, className, classes } = props;

  return (
    <MenuItem
      component={ButtonBase}
      className={clsx(styles.MenuItemButton, classes.root, className)}
    >
      {label}
      {React.cloneElement(icon, { className: clsx(styles.icon, classes.icon) })}
    </MenuItem>
  );
};

MenuItemButton.defaultProps = {
  icon: <NavIcon />,
  classes: {},
};
