import React from 'react';
import clsx from 'clsx';
import { ButtonBase } from '@cb-general/core/ButtonBase';

// local files
import styles from './Dropzones.module.scss';

type Props = React.ComponentProps<typeof ButtonBase> & {
  type?: 'up' | 'down' | 'tie';
  label?: string;
  roi?: string;
};

export const Dropzone = (props: Props) => {
  const { className, label, roi, type, ...restProps } = props;

  return (
    <ButtonBase className={clsx(styles.dropzone, className, !!type && styles[type])} {...restProps}>
      {!!label && <div className={styles.label}>{label}</div>}
      {!!roi && <div className={styles.roi}>{roi}</div>}
    </ButtonBase>
  );
};

Dropzone.defaultProps = {
  type: 'down',
}