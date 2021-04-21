import React from 'react';
import clsx from 'clsx';

// local files
import styles from './WkdUserPanel.module.scss';

type UserPanelProps = {
  className?: string;
  children?: React.ReactNode;
};

export const UserPanel = (props: UserPanelProps) => {
  const { className, children } = props;

  return (
    <div className={clsx(styles.root, className)}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
