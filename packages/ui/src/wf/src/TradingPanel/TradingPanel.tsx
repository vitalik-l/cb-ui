import React from 'react';
import clsx from 'clsx';

// local files
import styles from './TradingPanel.module.scss';
import { useClasses } from '@cb-general/core/hooks/useClasses';

export type TradingPanelProps = {
  className?: string;
  active?: boolean;
  classes?: any;
} & React.HTMLAttributes<HTMLDivElement>;

export const TradingPanel = (props: TradingPanelProps) => {
  const { className, active, children, classes: classesProp, ...restProps } = props;
  const classes = useClasses(styles, classesProp);

  return (
    <div
      className={clsx(classes.root, className, !active && classes.inactive, {
        [classes.active]: active,
      })}
      {...restProps}
    >
      {children}
    </div>
  );
};
