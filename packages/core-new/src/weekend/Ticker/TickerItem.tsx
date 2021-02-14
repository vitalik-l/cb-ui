import React from 'react';
import clsx from 'clsx';

// local files
import classes from '../styles/classes.module.scss';

type Props = {
  className?: string;
  children?: React.ReactNode;
  position?: 'left' | 'right';
};

export const TickerItem = (props: Props) => {
  const { className, children, position } = props;

  return (
    <div
      className={clsx(`${classes.Ticker}-item`, className, {
        [`${classes.Ticker}-item_position_${position}`]: !!position,
      })}
    >
      {children}
    </div>
  );
};
