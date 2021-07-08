import React from 'react';
import clsx from 'clsx';

// local files
import { ButtonBase } from '../ButtonBase';
import { useClasses } from '../hooks/useClasses';
import styles from './CircularIndicatorButton.module.scss';

type Props = {
  className?: string;
  children?: React.ReactNode;
  color?: 'red' | 'green' | 'orange';
  classes?: any;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const CircularIndicatorButton = (props: Props) => {
  const { className, children, color = 'green', classes: classesProp, ...restProps } = props;
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
