import React from 'react';
import clsx from 'clsx';

// local files
import styles from './TitledColumn.module.scss';

type Props = {
  className?: string;
  title?: string;
  value?: string;
  source?: string;
};

export const TitledColumn = (props: Props) => {
  const { title, value, className } = props;

  return (
    <div className={clsx(styles.TitledColumn, className)}>
      <div className={styles.title}>{title}</div>
      <div className={styles.value}>{value || '-'}</div>
    </div>
  );
};
