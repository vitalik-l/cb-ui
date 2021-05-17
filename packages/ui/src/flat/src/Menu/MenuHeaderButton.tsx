import React from 'react';
import clsx from 'clsx';
import { ButtonBase } from '@cb-general/core/ButtonBase';
import { NavIcon } from '@cb-general/icons/NavIcon';

// local files
import styles from './FlatMenuHeaderButton.module.scss';

export const MenuHeaderButton = (props: any) => {
  const { className, children, ...restProps } = props;

  return (
    <ButtonBase className={clsx(styles.root, className)} {...restProps}>
      <NavIcon back className="size_1_8" />
      <div className={styles.label}>{children}</div>
    </ButtonBase>
  );
};
