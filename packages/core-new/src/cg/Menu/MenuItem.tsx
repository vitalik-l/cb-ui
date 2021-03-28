import React from 'react';
import clsx from 'clsx';

// local files
import styles from './CgMenuItem.module.scss';

type Props = {
  children?: React.ReactNode;
  component?: any;
  className?: string;
};

export const MenuItem = (props: Props) => {
  const { component = 'div', className, ...restParams } = props;
  const Component = component;

  return <Component className={clsx(styles.root, className)} {...restParams} />;
};
