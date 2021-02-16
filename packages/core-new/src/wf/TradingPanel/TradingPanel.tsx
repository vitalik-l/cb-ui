import React from 'react';
import clsx from 'clsx';

// local files
import classes from '../styles/classes.module.scss';
import './TradingPanel.scss';

export type TradingPanelProps = {
  className?: string;
  active?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const TradingPanel = (props: TradingPanelProps) => {
  const { className, active, children, ...restProps } = props;

  return (
    <div
      className={clsx(classes.TradingPanel, className, {
        [`${classes.TradingPanel}_active`]: active,
        [`${classes.TradingPanel}_inactive`]: !active,
      })}
      {...restProps}
    >
      {children}
    </div>
  );
};
