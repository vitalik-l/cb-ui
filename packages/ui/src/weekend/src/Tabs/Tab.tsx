import React from 'react';
import { useClasses } from '@cb-general/core/hooks/useClasses';

// local files
import { Tab as CoreTab, TabProps } from '@cb-general/core/Tabs';
import styles from './WkdTab.module.scss';

export const Tab = (props: TabProps) => {
  const { className, label, classes: classesProp, ...restProps } = props;
  const classes = useClasses(styles, classesProp);

  return (
    <CoreTab
      classes={classes}
      label={<span className={classes.label}>{label}</span>}
      {...restProps}
    />
  );
};
