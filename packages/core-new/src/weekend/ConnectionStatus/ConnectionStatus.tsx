import React from 'react';
import clsx from 'clsx';

// local files
import classes from '../styles/classes.module.scss';
import './ConnectionStatus.scss';

type Props = {
  className?: string;
  online?: boolean;
};

export const ConnectionStatus = (props: Props) => {
  const { className, online } = props;

  return (
    <div
      className={clsx(classes.ConnectionStatus, className, {
        [`${classes.ConnectionStatus}_online`]: online,
      })}
    />
  );
};
