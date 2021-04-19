import React from 'react';
import clsx from 'clsx';

// local files
import classes from '../styles/classes.module.scss';
import './GameTable.scss';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export const GameTable = (props: Props) => {
  const { className, children } = props;

  return (
    <div className={clsx(classes.GameTable, className)}>
      <div className={`${classes.GameTable}__box`} />
      {children}
    </div>
  );
};
