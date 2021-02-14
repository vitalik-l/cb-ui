import React from 'react';
import clsx from 'clsx';

// local files
import classes from '../styles/classes.module.scss';
import './ExampleComponent.scss';

type Props = {
  className?: string;
};

export const ExampleComponent = (props: Props) => {
  const { className } = props;

  return <div className={clsx(classes.ExampleComponent, className)} />;
};
