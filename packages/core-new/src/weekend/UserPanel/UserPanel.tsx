import React from 'react';
import clsx from 'clsx';

// local files
import classes from '../styles/classes.module.scss';
import './UserPanel.scss';

type UserPanelProps = {
  className?: string;
  children?: React.ReactNode;
};

export const UserPanel = (props: UserPanelProps) => {
  const { className, children } = props;

  return (
    <div className={clsx(classes.UserPanel, className)}>
      <div className={`${classes.UserPanel}-inner`}>{children}</div>
    </div>
  );
};
