import clsx from 'clsx';
import React from 'react';
import { useClasses } from '@cb-general/core/hooks/useClasses';
import { GameButton as WkdGameButton, GameButtonProps } from '@cb-general/weekend/GameButton';
import styles from './GameButton.module.scss';

type Props = GameButtonProps & {
  glowSelected?: boolean;
  classes?: {
    glowSelected?: string;
  };
};

export const GameButton = React.forwardRef(
  ({ className, glowSelected, classes: classesProp, ...restProps }: Props, ref: any) => {
    const classes = useClasses(styles, classesProp);

    return (
      <WkdGameButton
        ref={ref}
        {...restProps}
        className={clsx(className, glowSelected && classes.glowSelected)}
        classes={classes}
      />
    );
  },
);
