import React from 'react';
import clsx from 'clsx';

// local files
import { Button } from '../Button';
import classes from '../styles/classes.module.scss';
import './ProgressButton.scss';

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
      className={clsx(classes.ProgressButton, className, {
        [`${classes.ProgressButton}_color_${color}`]: !!color,
      })}
      data-label={label}
      square
      {...otherProps}
    >
      {label}
      <span style={{ transform: `translateX(${progress}%)` }} />
    </Button>
  );
};

ProgressButton.defaultProps = {
  color: 'green',
};
