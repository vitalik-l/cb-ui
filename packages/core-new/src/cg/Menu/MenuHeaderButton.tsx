import React from 'react';
import clsx from 'clsx';
import { ButtonBase } from '@cb-general/core/ButtonBase';

// local files
import { NavIcon } from '../icons';
import styles from './MenuHeaderButton.module.scss';

export const MenuHeaderButton = (props: any) => {
  const { className, children, ...restProps } = props;

  return (
    <ButtonBase className={clsx(styles.MenuHeaderButton, className)} {...restProps}>
      <NavIcon back className="size_1_8" />
      <div className={styles.label}>{children}</div>
    </ButtonBase>
  );
};
