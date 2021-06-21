import React from 'react';
import clsx from 'clsx';
import { ButtonBase } from '@cb-general/core/ButtonBase';

// local
import styles from './CgGameLink.module.scss';

type Props = {
  game: 'wallstbaccarat' | 'roulettefx' | 'wallstroulette' | 'weekendforex' | 'weekendbinary';
  active?: boolean;
  className?: string;
} & React.HTMLAttributes<HTMLButtonElement>;

export const GameLink = (props: Props) => {
  const { className, game, active, ...restProps } = props;

  return (
    <ButtonBase
      className={clsx(className, styles.root, styles[game], active && styles.active)}
      {...restProps}
    />
  );
};
