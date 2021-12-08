import clsx from 'clsx';
import React from 'react';
import styles from './WkdTickerItem.module.scss';

type Props = {
  className?: string;
  children?: React.ReactNode;
  position?: 'left' | 'right';
} & React.HTMLAttributes<HTMLDivElement>;

export const TickerItem = (props: Props) => {
  const { className, children, position, ...restProps } = props;

  return (
    <div
      className={clsx(styles.root, className, !!position && styles?.[`position_${position}`])}
      {...restProps}
    >
      {children}
    </div>
  );
};
