import React from 'react';
import clsx from 'clsx';

// local files
import { ButtonBase } from '@cb-general/core/ButtonBase';
import classes from '../styles/classes.module.scss';

type Props = {
  className?: string;
  children?: React.ReactNode;
  color?: 'red' | 'green' | 'yellow';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const CircularIndicatorButton = (props: Props) => {
  const { className, children, color, ...restProps } = props;

  return (
    <ButtonBase
      className={clsx(`${classes.CircularIndicator}-button`, className, {
        [`${classes.CircularIndicator}-button_color_${color}`]: !!color,
      })}
      {...restProps}
    >
      {children}
    </ButtonBase>
  );
};
