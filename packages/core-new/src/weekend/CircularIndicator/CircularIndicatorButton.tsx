import React from 'react';
import clsx from 'clsx';

// local files
import { ButtonBase } from '@cb-general/core/ButtonBase';
import styles from './WkdCircularIndicatorButton.module.scss';

type Props = {
  className?: string;
  children?: React.ReactNode;
  color?: 'red' | 'green' | 'orange';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const CircularIndicatorButton = (props: Props) => {
  const { className, children, color, ...restProps } = props;

  return (
    <ButtonBase
      className={clsx(styles.root, className, !!color && styles[`color_${color}`])}
      {...restProps}
    >
      {children}
    </ButtonBase>
  );
};
