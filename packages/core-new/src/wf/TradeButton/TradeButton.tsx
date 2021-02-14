import React from 'react';
import clsx from 'clsx';

// local files
import { ButtonBase } from '@cb-general/core/ButtonBase';
import classes from '../styles/classes.module.scss';
import './TradeButton.scss';

type Props = {
  className?: string;
  children?: React.ReactNode;
  color?: 'default' | 'green' | 'red';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const TradeButton = (props: Props) => {
  const { className, color = 'default', ...restProps } = props;

  return (
    <ButtonBase
      className={clsx(classes.TradeButton, className, {
        [`${classes.TradeButton}_color_${color}`]: !!color,
      })}
      {...restProps}
    />
  );
};
