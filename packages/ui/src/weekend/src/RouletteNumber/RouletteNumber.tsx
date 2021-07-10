import React from 'react';
import clsx from 'clsx';

// local files
import styles from './RouletteNumber.module.scss';

type Props = {
  color?: 'red' | 'black' | 'green';
  candle?: 'up' | 'down' | 'zero';
  children?: string;
  active?: boolean;
} & React.ComponentProps<'div'>;

export const RouletteNumber = (props: Props) => {
  const { className, children, color = 'black', candle = 'up', active, ...restProps } = props;

  return (
    <div
      className={clsx(styles.root, className, styles[`color_${color}`], active && styles.active)}
      {...restProps}
    >
      <span className={styles.label}>{children}</span>
      <div className={clsx(styles.candle, styles[`candle_${candle}`])} />
    </div>
  );
};
