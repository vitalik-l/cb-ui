import React from 'react';
import clsx from 'clsx';
import { useClasses } from '@cb-general/core/hooks/useClasses';

// local files
import styles from './CgDrawer.module.scss';

type ClassesType = {
  root?: string;
  open?: string;
  [key: string]: any;
};

export type DrawerProps = {
  open?: boolean;
  classes?: ClassesType;
  appear?: 'left' | 'right' | 'bottom' | 'top';
} & React.HTMLAttributes<HTMLDivElement>;

export const Drawer = (props: DrawerProps) => {
  const { className, open, classes: classesProp, appear, ...restProps } = props;
  const classes: ClassesType = useClasses(styles, classesProp);

  return (
    <div
      className={clsx(
        classes.root,
        className,
        appear && classes[`appear_${appear}`],
        open && classes.open,
      )}
      {...restProps}
    />
  );
};

Drawer.defaultProps = {
  appear: 'right',
};
