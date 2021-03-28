import React from 'react';
import clsx from 'clsx';
import { ButtonBase } from '@cb-general/core/ButtonBase';

// local files
import styles from './CgButton.module.scss';

export const Button = (props: any) => {
  const { className, variant = 'contained', color, icon, children, ...buttonProps } = props;

  return (
    <ButtonBase
      className={clsx(styles.root, className, {
        [styles[variant]]: variant,
        [styles[color]]: color,
        [styles.withIcon]: icon,
      })}
      {...buttonProps}
    >
      {children}
      {icon && <div className={styles.icon}>{icon}</div>}
    </ButtonBase>
  );
};

Button.defaultProps = {
  variant: 'contained',
};
