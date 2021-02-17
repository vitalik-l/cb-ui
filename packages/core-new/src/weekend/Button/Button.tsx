import React from 'react';
import clsx from 'clsx';
import { ButtonBase } from '@cb-general/core/ButtonBase';

// local files
import classes from '../styles/classes.module.scss';
import './Button.scss';

export const Button = (props: any) => {
  const { className, variant, color, square, ...restProps } = props;
  return (
    <ButtonBase
      className={clsx(classes.Button, className, {
        [`${classes.Button}_variant_${variant}`]: !!variant,
        [`${classes.Button}_color_${color}`]: !!color,
        [`${classes.Button}_square`]: !!square,
      })}
      {...restProps}
    />
  );
};
