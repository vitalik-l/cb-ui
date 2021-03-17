import React from 'react';
import clsx from 'clsx';

// local files
import styles from './ExampleComponent.module.scss';

type Props = {
  className?: string;
};

export const ExampleComponent = (props: Props) => {
  const { className } = props;

  return <div className={clsx(styles.ExampleComponent, className)} />;
};
