import React from 'react';
import clsx from 'clsx';

// local files
import classes from '../styles/classes.module.scss';
import './Countdown.scss';

type Props = {
  className?: string;
  value?: string | number;
};

export const Countdown = (props: Props) => {
  const { className, value } = props;

  return <div className={clsx(classes.Countdown, className)}>{value}</div>;
};
