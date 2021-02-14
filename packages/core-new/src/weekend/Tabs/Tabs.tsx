import React from 'react';
import { Tabs as CoreTabs } from '@cb-general/core/Tabs';
import clsx from 'clsx';

// local files
import classes from '../styles/classes.module.scss';
import './Tabs.scss';

export const Tabs = (props: any) => {
  const { className, ...restProps } = props;

  return (
    <div className={clsx(classes.Tabs, className)}>
      <CoreTabs {...restProps} />
    </div>
  );
};
