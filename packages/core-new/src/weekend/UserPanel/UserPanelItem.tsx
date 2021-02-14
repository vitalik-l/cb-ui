import React from 'react';
import clsx from 'clsx';

// local files
import classes from '../styles/classes.module.scss';

export const UserPanelItem = (props: any) => {
  const { className, ...restProps } = props;

  return <div className={clsx(`${classes.UserPanel}-item`, className)} {...restProps} />;
};
