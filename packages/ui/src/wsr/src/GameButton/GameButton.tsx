import React from 'react';
import clsx from 'clsx';
import { GameButton as WkdGameButton, GameButtonProps } from '@cb-general/weekend/GameButton';
import { useClasses } from '@cb-general/core/hooks/useClasses';
import styles from './GameButton.module.scss';

type Props = GameButtonProps & {
  glowSelected?: boolean;
  classes?: {
    glowSelected?: string;
  };
};

export const GameButton = ({
  className,
  glowSelected,
  classes: classesProp,
  ...restProps
}: Props) => {
  const classes = useClasses(styles, classesProp);

  return (
    <WkdGameButton
      {...restProps}
      className={clsx(className, glowSelected && classes.glowSelected)}
      classes={classes}
    />
  );
};
