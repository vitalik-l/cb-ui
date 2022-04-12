import clsx from 'clsx';
import React from 'react';
import { ButtonBase } from '@cb-general/core/ButtonBase';
import { useStyles } from '@cb-general/core/hooks';
import defaultStyles from './FlatButton.module.scss';

type Variant = 'contained' | 'outlined' | 'text';
type Color = 'green' | 'red' | 'gray';

export type ButtonProps = React.ComponentProps<typeof ButtonBase> & {
  variant?: Variant;
  color?: Color;
  styles?: { [key in Variant | Color | 'circle']?: string };
  circle?: boolean;
};

export const Button = (props: ButtonProps) => {
  const {
    className,
    variant = 'contained',
    color,
    styles: stylesProp,
    circle,
    ...buttonProps
  } = props;
  const styles = useStyles(defaultStyles, stylesProp);

  return (
    <ButtonBase
      className={clsx(
        className,
        styles?.[variant],
        !!color && styles?.[color],
        !!circle && styles?.circle,
      )}
      styles={styles}
      {...buttonProps}
    />
  );
};

Button.defaultProps = {
  variant: 'contained',
};
