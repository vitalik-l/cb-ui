import React from 'react';
import clsx from 'clsx';

// local files
import { Button } from '../Button';
import styles from './TradeButton.module.scss';

type Props = {
  className?: string;
  color?: 'red' | 'green';
  align?: 'right' | 'left';
};

export const TradeButton = (props: Props) => {
  const { className, align, ...restProps } = props;

  return (
    <Button
      className={clsx(styles.TradeButton, className, styles[`align_${align}`])}
      {...restProps}
    />
  );
};

TradeButton.defaultProps = {
  align: 'right',
  color: 'green',
}
