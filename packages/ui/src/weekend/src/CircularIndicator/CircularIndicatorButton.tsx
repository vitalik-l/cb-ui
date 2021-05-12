import React from 'react';
import clsx from 'clsx';
import { ButtonBase } from '@cb-general/core/ButtonBase';
import { useClasses } from '@cb-general/core/hooks/useClasses';

// local files
import styles from './WkdCircularIndicatorButton.module.scss';

type Props = {
  className?: string;
  children?: React.ReactNode;
  color?: 'red' | 'green' | 'orange';
  classes?: any;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const CircularIndicatorButton = (props: Props) => {
  const { className, children, color, classes: classesProp, ...restProps } = props;
  const classes = useClasses(styles, classesProp);

  return (
    <ButtonBase
      className={clsx(classes.root, className, !!color && classes[`color_${color}`])}
      {...restProps}
    >
      {children}
    </ButtonBase>
  );
};
