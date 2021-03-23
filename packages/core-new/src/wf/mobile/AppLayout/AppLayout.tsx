import React from 'react';
import clsx from 'clsx';
import { Viewport, ViewportProps } from '@cb-general/core/Viewport';

// local files
import styles from './AppLayout.module.scss';

type Props = ViewportProps & {
  className?: string;
  header?: React.ReactNode;
  chart?: React.ReactNode;
  controls?: React.ReactNode;
  children?: React.ReactNode;
};

export const AppLayout = (props: Props) => {
  const { className, header, chart, controls, children, ...viewportProps } = props;

  React.useLayoutEffect(() => {
    document.documentElement.classList.add(styles.Root);

    return () => {
      document.documentElement.classList.remove(styles.Root);
    };
  });

  return (
    <Viewport {...viewportProps}>
      <div className={clsx(styles.AppLayout, className)}>
        {header}
        <div className={styles.chart}>{chart}</div>
        <div className={styles.controls}>{controls}</div>
        {children}
      </div>
    </Viewport>
  );
};

AppLayout.defaultProps = {
  baseHeight: 620,
  baseWidth: 375,
  maxRatio: 9 / 15,
  minRatio: 9 / 16,
};
