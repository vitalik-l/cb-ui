import React from 'react';
import clsx from 'clsx';

// local files
import styles from './WkdTicker.module.scss';

type Props = {
  className?: string;
  children?: React.ReactNode;
  position?: 'left' | 'right';
};

export const TickerItem = (props: Props) => {
  const { className, children, position } = props;

  return (
    <div
      className={clsx(styles.item, className, {
        [styles[`position_${position}`]]: !!position,
      })}
    >
      {children}
    </div>
  );
};
