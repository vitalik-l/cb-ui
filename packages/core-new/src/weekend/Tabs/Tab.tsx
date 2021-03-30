import React from 'react';

// local files
import { Tab as CoreTab, TabProps } from '@cb-general/core/Tabs';
import styles from './WkdTab.module.scss';

export const Tab = (props: TabProps) => {
  const { className, label, ...restProps } = props;

  return (
    <CoreTab classes={styles} label={<span className={styles.label}>{label}</span>} {...restProps} />
  );
};
