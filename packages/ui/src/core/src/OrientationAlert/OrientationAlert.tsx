import React from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import { RotatePortraitIcon } from '@cb-general/icons/RotatePortraitIcon';

// local files
import styles from './OrientationAlert.module.scss';

type Props = React.ComponentProps<'div'> & {
  portalTarget?: Element;
};

export const OrientationAlert = (props: Props) => {
  const { className, children, portalTarget = document.body, ...restProps } = props;

  const content = (
    <div className={clsx(styles.root, className)} {...restProps}>
      <RotatePortraitIcon className={styles.icon} />
      <span className={styles.label}>{children}</span>
    </div>
  );

  if (portalTarget) {
    return createPortal(content, portalTarget);
  }

  return content;
};
