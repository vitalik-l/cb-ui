import React from 'react';
import clsx from 'clsx';

// local files
import styles from './WkdChip.module.scss';

type Props = {
  className?: string;
  color?: 'black' | 'green' | 'white' | 'blue' | 'red';
  large?: boolean;
  value?: string | number;
};

export const Chip = (props: Props) => {
  const { className, color, large, value = '' } = props;

  return (
    <div
      className={clsx(styles.root, className, {
        [styles[`color_${color}`]]: !!color,
        [styles.size_large]: large,
      })}
    >
      {typeof value !== 'object' && (
        <span
          className={clsx(styles.content, {
            [styles.font_s]: value.toString().length > 4,
            [styles.font_xs]: value.toString().length > 6,
          })}
        >
          {value}
        </span>
      )}
    </div>
  );
};
