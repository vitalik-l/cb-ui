import React from 'react';
import clsx from 'clsx';

// local files
import { Button } from '../Button';
import styles from './WkdProgressButton.module.scss';

type Props = {
  className?: string;
  disabled?: boolean;
  color?: 'red' | 'green';
  label?: string;
  progress?: number;
};

export const ProgressButton = (props: Props) => {
  const { className, color, label, progress, ...otherProps } = props;

  return (
    <Button
      className={clsx(styles.root, className)}
      data-label={label}
      square
      {...otherProps}
    >
      {label}
      <span className={clsx(styles.bg, !!color && styles[`color_${color}`])} />
      <span className={styles.progress} style={{ transform: `translateX(${progress}%)` }} />
    </Button>
  );
};

ProgressButton.defaultProps = {
  color: 'green',
};
