import clsx from 'clsx';
import React from 'react';
import { ButtonBase } from '@cb-general/core/ButtonBase';
import { useStyles } from '@cb-general/core/hooks';
import baseStyles from './CgGameLink.module.scss';

type Props = {
  game: 'wallstbaccarat' | 'roulettefx' | 'wallstroulette' | 'weekendforex' | 'weekendbinary';
  active?: boolean;
  className?: string;
  styles?: any;
} & React.HTMLAttributes<HTMLButtonElement>;

export const GameLink = (props: Props) => {
  const { className, game, active, styles: stylesProp, ...restProps } = props;
  const styles = useStyles(baseStyles, stylesProp);

  return (
    <ButtonBase
      className={clsx(className, styles.root, styles[game], active && styles.active)}
      {...restProps}
    />
  );
};
