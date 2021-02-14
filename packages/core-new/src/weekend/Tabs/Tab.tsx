import React from 'react';
import clsx from 'clsx';

// local files
import { Tab as CoreTab, TabProps } from '@cb-general/core/Tabs';
import classes from '../styles/classes.module.scss';
import './Tab.scss';

export const Tab = (props: TabProps) => {
  const { className, label, ...restProps } = props;

  return (
    <CoreTab className={clsx(classes.Tab, className)} label={<span>{label}</span>} {...restProps} />
  );
};
