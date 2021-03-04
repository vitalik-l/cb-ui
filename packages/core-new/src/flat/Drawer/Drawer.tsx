import React from 'react';
import clsx from 'clsx';

// local files
import styles from './Drawer.module.scss';

export type DrawerProps = {
  className?: string;
  open?: boolean;
  children?: React.ReactNode;
};

export const Drawer = (props: DrawerProps) => {
  const { className, open = false, children, ...restProps } = props;

  return (
    <div className={clsx(styles.root, className, {
      [styles.open]: open,
    })} {...restProps}>
      {open && children}
    </div>
  );
};
