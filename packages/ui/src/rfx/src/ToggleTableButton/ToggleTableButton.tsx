import React from 'react';
import clsx from 'clsx';
import { ButtonBase } from '@cb-general/core/ButtonBase';

// local files
import styles from './ToggleTableButton.module.scss';

type Props = React.ComponentProps<typeof ButtonBase> & {
  hidden?: boolean;
};

export const ToggleTableButton = (props: Props) => {
  const { className, hidden, ...restProps } = props;

  return <ButtonBase className={clsx(styles.root, className, hidden && styles.hidden)} {...restProps} />;
};
