import React from 'react';
import clsx from 'clsx';

// local files
import classes from '../styles/classes.module.scss';
import './Ticker.scss';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export const Ticker = (props: Props) => {
  const { className, children, ...restProps } = props;

  return (
    <div className={clsx(classes.Ticker, className)} {...restProps}>
      <div className={`${classes.Ticker}-content`}>{children}</div>
    </div>
  );
};
