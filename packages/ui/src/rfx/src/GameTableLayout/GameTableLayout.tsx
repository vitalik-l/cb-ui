import React from 'react';
import clsx from 'clsx';

// local files
import styles from './GameTableLayout.module.scss';
import { ToggleTableButton } from '../ToggleTableButton';

type Props = React.ComponentProps<'div'> & {
  rouletteWheel?: React.ReactElement;
  chips?: React.ReactElement;
  gameRounds?: React.ReactElement;
  buttons?: React.ReactElement;
  hidden?: boolean;
  onToggle?: any;
};

export const GameTableLayout = (props: Props) => {
  const { className, rouletteWheel, chips, gameRounds, buttons, hidden, onToggle, ...restProps } = props;

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
      <div className={styles.toggleButton}>
        <ToggleTableButton onClick={onToggle} hidden={hidden} />
      </div>
    </div>
  );
};
