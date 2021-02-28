import React from 'react';
import clsx from 'clsx';
import { ButtonBase } from '@cb-general/core/ButtonBase';

// local files
import styles from './WkdButton.module.scss';

export const Button = (props: any) => {
  const { className, variant, color, square, ...restProps } = props;

  return (
    <ButtonBase
      className={clsx(styles.root, className, {
        [`${styles.root}_variant_${variant}`]: !!variant,
        [`${styles.root}_color_${color}`]: !!color,
        [`${styles.square}`]: !!square,
      })}
      {...restProps}
    />
  );
};
