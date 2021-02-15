import React from 'react';

// local files
import { AppResolver, AppResolverProps } from './AppResolver';
import { WindowResizeListener } from '../WindowResizeListener';
import classes from '../styles/classes.module.scss';
import './Root.scss';

export const Root = (props: AppResolverProps) => {
  React.useLayoutEffect(() => {
    document.documentElement.classList.add(classes.Root);

    return () => {
      document.documentElement.classList.remove(classes.Root);
    };
  }, []);

  return (
    <WindowResizeListener>
      <AppResolver {...props} />
    </WindowResizeListener>
  );
};
