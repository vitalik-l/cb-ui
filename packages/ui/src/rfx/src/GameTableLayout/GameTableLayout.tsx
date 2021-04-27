import React from 'react';
import clsx from 'clsx';

// local files
import styles from './GameTableLayout.module.scss';

type Props = React.ComponentProps<'div'> & {
  rouletteWheel?: React.ReactElement;
  chips?: React.ReactElement;
  gameRounds?: React.ReactElement;
  buttons?: React.ReactElement;
};

export const GameTableLayout = (props: Props) => {
  const { className, rouletteWheel, chips, gameRounds, buttons, ...restProps } = props;

  return (
    <div className={clsx(styles.root, className)} {...restProps}>
      {rouletteWheel}
      <div className={styles.chips}>
        {chips}
      </div>
      <div className={styles.buttons}>
        {buttons}
      </div>
      {!!gameRounds && React.cloneElement(gameRounds, { className: styles.gameRounds })}
    </div>
  );
};
