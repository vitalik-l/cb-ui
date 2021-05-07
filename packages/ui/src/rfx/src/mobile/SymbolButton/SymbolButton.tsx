import React from 'react';
import clsx from 'clsx';
import { ButtonBase } from '@cb-general/core/ButtonBase';
// local files
import styles from './SymbolButton.module.scss';

type Props = React.ComponentProps<typeof ButtonBase> & {
  selected?: boolean;
};

export const SymbolButton = (props: Props) => {
  const { className, selected, children, ...restProps } = props;

  return (
    <ButtonBase
      className={clsx(styles.root, className, selected && styles.selected)}
      {...restProps}
    >
      <span className={styles.label}>{children}</span>
    </ButtonBase>
  );
};
