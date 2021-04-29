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
  autoplayCounter?: React.ReactElement;
  hidden?: boolean;
  onToggle?: any;
};

export const GameTableLayout = (props: Props) => {
  const {
    className,
    rouletteWheel,
    chips,
    gameRounds,
    buttons,
    hidden,
    onToggle,
    autoplayCounter,
    ...restProps
  } = props;

  const onToggleButtonClick = React.useCallback(
    (event: any) => {
      event.stopPropagation();
      onToggle();
    },
    [onToggle],
  );

  return (
    <div
      className={clsx(styles.root, className, hidden && styles.hidden)}
      onClick={hidden ? onToggle : undefined}
      {...restProps}
    >
      {rouletteWheel}
      {!!chips && <div className={styles.chips}>{chips}</div>}
      {!!buttons && <div className={styles.buttons}>{buttons}</div>}
      {!!gameRounds && React.cloneElement(gameRounds, { className: styles.gameRounds })}
      {!!autoplayCounter && <div className={styles.autoplayCounter}>{autoplayCounter}</div>}
      <div className={styles.toggleButton}>
        <ToggleTableButton onClick={onToggle ? onToggleButtonClick : undefined} hidden={hidden} />
      </div>
    </div>
  );
};
