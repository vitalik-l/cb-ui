import React from 'react';
import clsx from 'clsx';

// local files
import { ButtonBase } from '@cb-general/core/ButtonBase';
import styles from './WkdMenuButton.module.scss';

type Props = {
  className?: string;
  disabled?: boolean;
};

export const MenuButton = (props: Props) => {
  const { className, ...restProps } = props;

  return (
    <ButtonBase className={clsx(styles.root, className)} {...restProps}>
      <div />
      <div />
      <div />
    </ButtonBase>
  );
};
