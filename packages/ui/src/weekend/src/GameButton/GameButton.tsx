import React from 'react';
import clsx from 'clsx';
import { ButtonBase } from '@cb-general/core/ButtonBase';

// local files
import styles from './WkdGameButton.module.scss';

type Props = React.ComponentProps<typeof ButtonBase> & {
  color?: 'primary' | 'default' | 'green';
  sublabel?: string;
  unclickable?: boolean;
};

export const GameButton = (props: Props) => {
  const { className, color, children, sublabel, unclickable, ...restProps } = props;

  return (
    <ButtonBase
      className={clsx(
        styles.root,
        className,
        color && styles[`color_${color}`],
        unclickable && styles.unclickable,
      )}
      {...restProps}
    >
      {!!sublabel && <span className={styles.sublabel}>{sublabel}</span>}
      <span className={styles.label}>{children}</span>
    </ButtonBase>
  );
};

GameButton.defaultProps = {
  color: 'default',
};
