import React from 'react';
import clsx from 'clsx';

// local files
import styles from './RouletteWheel.module.scss';

type Props = {
  className?: string;
  slots?: 'redblack';
};

export const RouletteWheel = (props: Props) => {
  const { className, slots } = props;

  return (
    <div className={clsx(styles.root, className)}>
      <div className={styles.bg} />
      <div className={clsx(styles.slots, styles[`slots_${slots}`])} />
    </div>
  );
};

RouletteWheel.defaultProps = {
  slots: 'redblack',
}
