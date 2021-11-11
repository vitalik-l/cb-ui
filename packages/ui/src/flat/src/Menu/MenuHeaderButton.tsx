import clsx from 'clsx';
import React from 'react';
import { ButtonBase } from '@cb-general/core/ButtonBase';
import { NavIcon } from '@cb-general/icons/NavIcon';
import styles from './FlatMenuHeaderButton.module.scss';

export const MenuHeaderButton = (props: any) => {
  const { className, children, ...restProps } = props;

  return (
    <ButtonBase className={clsx(styles.root, className)} {...restProps}>
      <NavIcon back className="size-1.8" />
      <div className={styles.label}>{children}</div>
    </ButtonBase>
  );
};
