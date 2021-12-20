import clsx from 'clsx';
import React from 'react';
import { ButtonBase } from '@cb-general/core/ButtonBase';
import { useClasses } from '@cb-general/core/hooks/useClasses';
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
    classes: classesProp,
    ...buttonProps
  } = props;
  const classes = useClasses(styles, classesProp);
  const { label: labelClassName, ...buttonClasses } = classes;

  return (
    <ButtonBase
      className={clsx(className, {
        [classes[variant]]: variant,
        [classes[color]]: color,
        [classes.withIcon]: icon,
        [classes.labelCenter]: labelCenter,
        [classes.large]: large,
      })}
      classes={buttonClasses}
      {...buttonProps}
    >
      {labelCenter && <div />}
      <div className={labelClassName}>{children}</div>
      {icon && <div className={classes.icon}>{icon}</div>}
    </ButtonBase>
  );
};

Button.defaultProps = {
  variant: 'contained',
};
