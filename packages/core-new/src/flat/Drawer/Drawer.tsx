import React from 'react';
import clsx from 'clsx';
import { useClasses } from '@cb-general/core/hooks/useClasses';

// local files
import styles from './FlatDrawer.module.scss';

export type DrawerProps = {
  className?: string;
  open?: boolean;
  children?: React.ReactNode;
  classes?: any;
};

export const Drawer = (props: DrawerProps) => {
  const { className, open = false, children, classes: classesProp, ...restProps } = props;
  const classes = useClasses(styles, classesProp);

  return (
    <div
      className={clsx(classes.root, className, {
        [classes.open]: open,
      })}
      {...restProps}
    >
      {open && children}
    </div>
  );
};
