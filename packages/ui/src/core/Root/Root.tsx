import React from 'react';

// local files
import { AppResolver, AppResolverProps } from './AppResolver';
import { WindowResizeListener } from '../WindowResizeListener';
import styles from './CoreRoot.module.scss';

type Props = {
  className?: string;
} & AppResolverProps;

export const Root = (props: Props) => {
  const { className, ...restProps } = props;

  React.useLayoutEffect(() => {
    document.documentElement.classList.add(styles.root);
    if (className) {
      document.documentElement.classList.add(className);
    }

    return () => {
      document.documentElement.classList.remove(styles.root);
      if (className) {
        document.documentElement.classList.remove(className);
      }
    };
  }, [className]);

  return (
    <WindowResizeListener>
      <AppResolver {...restProps} />
    </WindowResizeListener>
  );
};
