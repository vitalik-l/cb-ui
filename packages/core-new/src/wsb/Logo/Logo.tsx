import React from 'react';
import clsx from 'clsx';

// local files
import classes from '../styles/classes.module.scss';
import './Logo.scss';

type Props = {
  className?: string;
};

export const Logo = (props: Props) => {
  const { className, ...restProps } = props;

  return <div className={clsx(classes.Logo, className)} {...restProps} />;
};
