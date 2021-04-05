import React from 'react';
import clsx from 'clsx';

// local files
import styles from './WkdGameCard.module.scss';

type Props = {
  className?: string;
  suit?: 'hearts' | 'diamonds' | 'clubs' | 'spades';
  value?: string | number;
};

export const GameCard = (props: Props) => {
  const { className, suit, value, ...restProps } = props;

  return (
    <div className={clsx(styles.root, className)} {...restProps}>
      <div className={styles.back} />
      <div className={clsx(styles.face, !!suit && styles[`suit_${suit}`])}>
        <span className={styles.value}>{value}</span>
        <span className={styles.valueCenter} />
        <span className={styles.value}>{value}</span>
      </div>
    </div>
  );
};
