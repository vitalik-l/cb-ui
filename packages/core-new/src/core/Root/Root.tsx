import React from 'react';

// local files
import { AppResolver, AppResolverProps } from './AppResolver';
import { WindowResizeListener } from '../WindowResizeListener';
import styles from './CoreRoot.module.scss';

export const Root = (props: AppResolverProps) => {
  React.useLayoutEffect(() => {
    document.documentElement.classList.add(styles.root);

    return () => {
      document.documentElement.classList.remove(styles.root);
    };
  }, []);

  return (
    <WindowResizeListener>
      <AppResolver {...props} />
    </WindowResizeListener>
  );
};
