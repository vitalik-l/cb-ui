import React from 'react';
import clsx from 'clsx';

// local files
import styles from './FlatOverlay.module.scss';

type Props = {
  className?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const Overlay = (props: Props) => {
  const { className, children, style, ...restProps } = props;

  return (
    <div className={clsx(styles.root, className)} style={style}>
      <div className={styles.clickable} {...restProps} />
      {children}
    </div>
  );
};
