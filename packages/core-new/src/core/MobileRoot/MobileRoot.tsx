import { createPortal } from 'react-dom';
import React from 'react';
import styles from './MobileRoot.module.scss';

type Props = {
  children?: React.ReactNode;
};

export const MobileRoot = ({ children }: Props) => {
  React.useLayoutEffect(() => {
    document.documentElement.classList.add(styles.root);

    return () => {
      document.documentElement.classList.remove(styles.root);
    };
  }, []);

  const scroller = createPortal(<div className={styles.scroller} />, document.body);

  return (
    <React.Fragment>
      {children}
      {scroller}
    </React.Fragment>
  );
};
