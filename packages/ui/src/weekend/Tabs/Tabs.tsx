import React from 'react';
import { Tabs as CoreTabs } from '@cb-general/core/Tabs';
import clsx from 'clsx';

// local files
import styles from './WkdTabs.module.scss';

const tabsStyles = {
  root: styles.tabs,
};

export const Tabs = (props: any) => {
  const { className, children, value, onChange, ...restProps } = props;

  return (
    <div className={clsx(styles.root, className)} {...restProps}>
      <CoreTabs value={value} onChange={onChange} children={children} classes={tabsStyles} />
    </div>
  );
};
