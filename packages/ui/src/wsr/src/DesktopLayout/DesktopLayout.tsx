import React from 'react';
import clsx from 'clsx';
import { Viewport, ViewportProps } from '@cb-general/core/Viewport';

// local files
import styles from './DesktopLayout.module.scss';

type Props = ViewportProps & {
  children?: React.ReactNode;
};

export const DesktopLayout = (props: Props) => {
  const { className, children, ...viewportProps } = props;

  return (
    <Viewport {...viewportProps}>
      <div className={clsx(styles.root, className)}>{children}</div>
    </Viewport>
  );
};

DesktopLayout.defaultProps = {
  baseHeight: 1080,
  baseWidth: 1920,
  maxRatio: 21 / 9,
  minRatio: 4 / 3,
};
