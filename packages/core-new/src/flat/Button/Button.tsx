import React from 'react';
import clsx from 'clsx';
import { ButtonBase } from '@cb-general/core/ButtonBase';

// local files
import styles from './FlatButton.module.scss';
import './FlatButton.scss';

export const Button = (props: any) => {
  const { className, variant = 'contained', color, ...buttonProps } = props;

  return (
    <ButtonBase
      className={clsx(styles.root, className, {
        [`${styles.variant}_${variant}`]: variant,
        [`${styles.color}_${color}`]: color,
      })}
      {...buttonProps}
    />
  );
};

Button.defaultProps = {
  variant: 'contained',
};
