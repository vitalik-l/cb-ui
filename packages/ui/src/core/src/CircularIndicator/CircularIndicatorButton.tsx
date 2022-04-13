import clsx from 'clsx';
import React from 'react';
import { ButtonBase } from '../ButtonBase';
import { useClasses } from '../hooks/useClasses';
import styles from './CircularIndicatorButton.module.scss';

type Props = {
  className?: string;
  children?: React.ReactNode;
  color?: 'red' | 'green' | 'orange';
  classes?: any;
  version?: 1 | 2;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const CircularIndicatorButton = (props: Props) => {
  const {
    className,
    children,
    color = 'green',
    classes: classesProp,
    version = 2,
    ...restProps
  } = props;
  const classes = useClasses(styles, classesProp);

  return (
    <ButtonBase
      className={clsx(
        classes.root,
        className,
        !!color && classes[`color_${color}`],
        !!version && classes[`version_${version}`],
      )}
      {...restProps}
    >
      {children}
    </ButtonBase>
  );
};
