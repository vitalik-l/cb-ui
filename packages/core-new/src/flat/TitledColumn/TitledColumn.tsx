import React from 'react';
import clsx from 'clsx';

// local files
import styles from './FlatTitledColumn.module.scss';

type Props = {
  className?: string;
  title?: string;
  value?: string;
  source?: string;
};

export const TitledColumn = (props: Props) => {
  const { title, value, className } = props;

  return (
    <div className={clsx(styles.root, className)}>
      <div className={styles.title}>{title}</div>
      <div className={styles.value}>{value || '-'}</div>
    </div>
  );
};
