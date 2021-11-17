import clsx from 'clsx';
import React from 'react';
import { ButtonBase } from '@cb-general/core/ButtonBase';
import styles from './FlatButton.module.scss';

export type ButtonProps = React.ComponentProps<typeof ButtonBase> & {
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'green' | 'red';
};

export const Button = (props: ButtonProps) => {
  const { className, variant = 'contained', color, ...buttonProps } = props;

  return (
    <ButtonBase
      className={clsx(className, styles?.[variant ?? ''], styles?.[color ?? ''])}
      classes={styles}
      {...buttonProps}
    />
  );
};

Button.defaultProps = {
  variant: 'contained',
};
