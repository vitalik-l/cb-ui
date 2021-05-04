import React from 'react';
import clsx from 'clsx';

// local files
import styles from './MobileGameTableLayout.module.scss';

type Props = React.ComponentProps<'div'> & {
  rouletteWheel?: React.ReactElement;
  chips?: React.ReactElement;
  gameRounds?: React.ReactElement;
  buttons?: React.ReactElement;
  autoplayCounter?: React.ReactElement;
  hidden?: boolean;
};

export const MobileGameTableLayout = (props: Props) => {
  const {
    className,
    rouletteWheel,
    chips,
    gameRounds,
    buttons,
    hidden,
    autoplayCounter,
    ...restProps
  } = props;

  return (
    <div className={clsx(styles.root, className, hidden && styles.hidden)} {...restProps}>
      <div className={styles.topContent}>
        {!!chips && <div className={styles.chipsWrap}>{React.cloneElement(chips, { className: styles.chips })}</div>}
        <div className={styles.rouletteWheel}>
          {rouletteWheel}
          {!!autoplayCounter && <div className={styles.autoplayCounter}>{autoplayCounter}</div>}
        </div>
      </div>
      <div className={styles.bottomContent}>
        {!!gameRounds && React.cloneElement(gameRounds, { className: styles.gameRounds, reversed: true })}
        {!!buttons && <div className={styles.buttons}>{buttons}</div>}
      </div>
    </div>
  );
};
