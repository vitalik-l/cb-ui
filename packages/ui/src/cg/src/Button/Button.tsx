import React from 'react';
import clsx from 'clsx';
import { ButtonBase } from '@cb-general/core/ButtonBase';

// local files
import styles from './CgButton.module.scss';

export const Button = (props: any) => {
  const {
    className,
    variant = 'contained',
    color,
    icon,
    children,
    labelCenter,
    large,
    classes = styles,
    ...buttonProps
  } = props;

  return (
    <ButtonBase
      className={clsx(classes.root, className, {
        [classes[variant]]: variant,
        [classes[color]]: color,
        [classes.withIcon]: icon,
        [classes.labelCenter]: labelCenter,
        [classes.large]: large,
      })}
      {...buttonProps}
    >
      {labelCenter && <div />}
      <div className={classes.label}>{children}</div>
      {icon && <div className={classes.icon}>{icon}</div>}
    </ButtonBase>
  );
};

Button.defaultProps = {
  variant: 'contained',
};
