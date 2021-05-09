import React from 'react';
import clsx from 'clsx';
import { RotatePortraitIcon } from '@cb-general/icons';

// local files
import styles from './OrientationAlert.module.scss';

type Props = React.ComponentProps<'div'>;

export const OrientationAlert = (props: Props) => {
  const { className, children, ...restProps } = props;

  return (
    <div className={clsx(styles.root, className)} {...restProps}>
      <RotatePortraitIcon className={styles.icon} />
      <span className={styles.label}>{children}</span>
    </div>
  );
};
