import React from 'react';
import clsx from 'clsx';
import { ButtonBase } from '@cb-general/core/ButtonBase';

// local files
import styles from './FlatIconButton.module.scss';

export const IconButton = (props: any) => {
  const { className, ...restProps } = props;

  return <ButtonBase className={clsx(styles.IconButton, className)} {...restProps} />;
};
