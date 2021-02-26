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
  active?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const TradeButton = (props: Props) => {
  const { className, color = 'default', active = true, disabled: disabledProp, ...restProps } = props;

  return (
    <ButtonBase
      className={clsx(classes.TradeButton, className, {
        [`${classes.TradeButton}_colored`]: color !== 'default',
        [`${classes.TradeButton}_color_${color}`]: !!color,
        [`${classes.TradeButton}_inactive`]: !active,
      })}
      disabled={disabledProp || !active}
      {...restProps}
    />
  );
};

TradeButton.defaultProps = {
  active: true,
}