import React from 'react';
import clsx from 'clsx';
import { ButtonBase } from '@cb-general/core/ButtonBase';

// local files
import { NavIcon } from '../icons';
import styles from './CgMenuHeaderButton.module.scss';

export const MenuHeaderButton = (props: any) => {
  const { className, children, ...restProps } = props;

  return (
    <ButtonBase className={clsx(styles.root, className)} {...restProps}>
      <NavIcon back className="size_1_8" />
      <div className={styles.label}>{children}</div>
    </ButtonBase>
  );
};
