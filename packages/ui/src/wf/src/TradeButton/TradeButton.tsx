import React from 'react';
import clsx from 'clsx';
import { ButtonBase } from '@cb-general/core/ButtonBase';

// local files
import styles from './WfTradeButton.module.scss';

type Props = {
  className?: string;
  children?: React.ReactNode;
  color?: 'default' | 'green' | 'red';
  active?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const TradeButton = (props: Props) => {
  const {
    className,
    color = 'default',
    active = true,
    disabled: disabledProp,
    ...restProps
  } = props;

  return (
    <ButtonBase
      className={clsx(styles.root, className, {
        [styles.colored]: color !== 'default',
        [styles[`color_${color}`]]: !!color,
        [styles.inactive]: !active,
      })}
      disabled={disabledProp || !active}
      {...restProps}
    />
  );
};

TradeButton.defaultProps = {
  active: true,
};
