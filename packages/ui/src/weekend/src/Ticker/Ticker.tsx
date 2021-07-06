import React from 'react';
import clsx from 'clsx';
import { useClasses } from '@cb-general/core/hooks/useClasses';

// local files
import styles from './WkdTicker.module.scss';

type Classes = {
  root?: string;
  content?: string;
};

type Props = {
  className?: string;
  children?: React.ReactNode;
  classes?: Classes;
};

export const Ticker = (props: Props) => {
  const { className, children, classes: classesProp, ...restProps } = props;
  const classes = useClasses(styles, classesProp);

  return (
    <div className={clsx(classes.root, className)} {...restProps}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};
