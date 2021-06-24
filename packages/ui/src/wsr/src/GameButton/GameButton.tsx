import React from 'react';
import clsx from 'clsx';
import { GameButton as WkdGameButton } from '@cb-general/weekend/GameButton';
import styles from './GameButton.module.scss';

type Props = React.ComponentProps<typeof WkdGameButton> & {
  glowSelected?: boolean;
};

console.log(styles);
export const GameButton = ({ className, glowSelected, ...restProps }: Props) => (
  <WkdGameButton
    {...restProps}
    className={clsx(className, glowSelected && styles.glowSelected)}
    classes={styles}
  />
);
