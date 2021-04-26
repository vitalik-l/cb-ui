import React from 'react';
import clsx from 'clsx';
import { ButtonBase } from '@cb-general/core/ButtonBase';

// local files
import styles from './GameButton.module.scss';

type Props = React.ComponentProps<typeof ButtonBase> & {
  color?: 'primary' | 'default';
};

export const GameButton = (props: Props) => {
  const { className, color, children, ...restProps } = props;

  return (
    <ButtonBase className={clsx(styles.root, className, color && styles[`color_${color}`])} {...restProps}>
      <span className={styles.label}>{children}</span>
    </ButtonBase>
  );
};

GameButton.defaultProps = {
  color: 'default',
}