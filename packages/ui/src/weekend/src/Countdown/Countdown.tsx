import React from 'react';
import { useClasses } from '@cb-general/core/hooks/useClasses';
import clsx from 'clsx';

// local files
import styles from './WkdCountdown.module.scss';

type ClassesType = {
  root?: string;
  label?: string;
  countdown?: string;
};

type Props = {
  className?: string;
  value?: string | number;
  label?: string;
  classes?: ClassesType;
};

export const Countdown = (props: Props) => {
  const { className, value, label, classes: classesProp, ...restProps } = props;
  const classes: ClassesType = useClasses(styles, classesProp);

  return (
    <div className={clsx(classes.root, className)} {...restProps}>
      {!!label && <div className={classes.label}>{label}</div>}
      <div className={classes.countdown}>{value}</div>
    </div>
  );
};
