import React from 'react';
import { Tabs as CoreTabs } from '@cb-general/core/Tabs';
import clsx from 'clsx';
import { useClasses } from '@cb-general/core/hooks/useClasses';

// local files
import styles from './WkdTabs.module.scss';

type ClassesType = {
  root?: string;
  tabs?: string;
};

export const Tabs = (props: any) => {
  const { className, children, value, onChange, classes: classesProp, ...restProps } = props;
  const classes: ClassesType = useClasses(styles, classesProp);

  return (
    <div className={clsx(classes.root, className)} {...restProps}>
      <CoreTabs value={value} onChange={onChange} children={children} className={classes.tabs} />
    </div>
  );
};
