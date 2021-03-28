import React from 'react';
import clsx from 'clsx';
import { ButtonBase } from '@cb-general/core/ButtonBase';
import {useClasses} from '@cb-general/core/hooks/useClasses';

// local files
import { MenuItem } from './MenuItem';
import { NavIcon } from '../icons';
import styles from './CgMenuItemButton.module.scss';

export const MenuItemButton = (props: any) => {
  const { children, icon, className, classes: classesProp, ...restProps } = props;
  const classes = useClasses(styles, classesProp);

  return (
    <MenuItem
      component={ButtonBase}
      className={clsx(classes.root, className)}
      {...restProps}
    >
      {children}
      {!!icon && React.cloneElement(icon, { className: classes.icon })}
    </MenuItem>
  );
};

MenuItemButton.defaultProps = {
  icon: <NavIcon />,
  classes: {},
};
