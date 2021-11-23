import clsx from 'clsx';
import React from 'react';
import { ButtonBase } from '@cb-general/core/ButtonBase';
import { useClasses } from '@cb-general/core/hooks/useClasses';
import styles from './FlatButton.module.scss';

type Variant = 'contained' | 'outlined' | 'text';
type Color = 'green' | 'red'

export type ButtonProps = React.ComponentProps<typeof ButtonBase> & {
  variant?: Variant;
  color?: Color;
  classes?: {[key in (Variant | Color)]?: string};
};

export const Button = (props: ButtonProps) => {
  const { className, variant = 'contained', color, classes: classesProp, ...buttonProps } = props;
  const classes = useClasses(styles, classesProp)

  return (
    <ButtonBase
      className={clsx(className, classes?.[variant], !!color && classes?.[color])}
      classes={classes}
      {...buttonProps}
    />
  );
};

Button.defaultProps = {
  variant: 'contained',
};
