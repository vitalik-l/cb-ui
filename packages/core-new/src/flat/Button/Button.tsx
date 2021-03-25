import React from 'react';
import clsx from 'clsx';
import { ButtonBase } from '@cb-general/core/ButtonBase';

// local files
import styles from './Button.module.scss';

export const Button = (props: any) => {
  const { className, variant = 'contained', color, ...buttonProps } = props;

  return (
    <ButtonBase
      className={clsx(styles.Button, styles.root, className, {
        [styles[variant]]: variant,
        [styles[color]]: color,
      })}
      {...buttonProps}
    />
  );
};

Button.defaultProps = {
  variant: 'contained',
};
