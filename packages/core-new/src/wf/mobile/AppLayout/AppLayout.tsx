import React from 'react';
import clsx from 'clsx';
import { Viewport, ViewportProps } from '@cb-general/core/Viewport';

// local files
import styles from './AppLayout.module.scss';

type Props = ViewportProps & {
  className?: string;
  header?: React.ReactNode;
};

export const AppLayout = (props: Props) => {
  const { className, header, ...viewportProps } = props;

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
