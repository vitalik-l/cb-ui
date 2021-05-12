import React from 'react';
import clsx from 'clsx';
import { useClasses } from '@cb-general/core/hooks/useClasses';
import { ButtonBase } from '@cb-general/core/ButtonBase';

// local files
import styles from './WfTradeButton.module.scss';

type Props = {
  className?: string;
  children?: React.ReactNode;
  color?: 'default' | 'green' | 'red';
  active?: boolean;
  classes?: any;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const TradeButton = (props: Props) => {
  const {
    className,
    color = 'default',
    active = true,
    disabled: disabledProp,
    classes: classesProp,
    ...restProps
  } = props;

  const classes = useClasses(styles, classesProp);

  return (
    <ButtonBase
      className={clsx(classes.root, className, {
        [classes.colored]: color !== 'default',
        [classes[`color_${color}`]]: !!color,
        [classes.inactive]: !active,
      })}
      disabled={disabledProp || !active}
      {...restProps}
    />
  );
};

TradeButton.defaultProps = {
  active: true,
};
