import React from 'react';
import clsx from 'clsx';
import { ButtonBase } from '@cb-general/core/ButtonBase';
import { MenuIcon } from '@cb-general/icons/MenuIcon';

// local files
import styles from './WkdMenuButton.module.scss';

type Props = {
  className?: string;
  disabled?: boolean;
};

export const MenuButton = (props: Props) => {
  const { className, ...restProps } = props;

  return (
    <ButtonBase className={clsx(styles.root, className)} {...restProps}>
      <MenuIcon className={styles.icon} />
    </ButtonBase>
  );
};
