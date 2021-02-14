import React from 'react';

// local files
import { WindowResizeListener } from '../WindowResizeListener';
import classes from '../styles/classes.module.scss';
import './Root.scss';

type Props = {
  children?: React.ReactNode;
};

export const Root = (props: Props) => {
  const { children } = props;

  React.useLayoutEffect(() => {
    document.documentElement.classList.add(classes.Root);

    return () => {
      document.documentElement.classList.remove(classes.Root);
    };
  }, []);

  return <WindowResizeListener>{children}</WindowResizeListener>;
};
