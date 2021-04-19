import React from 'react';
import clsx from 'clsx';

// local files
import { FieldsLayoutContext } from './FieldsLayoutContext';
import { useClasses } from '../hooks/useClasses';
import styles from './CoreFieldsLayout.module.scss';

export type FieldsLayoutProps = {
  type?: 'inline' | 'stacked' | 'default';
  children?: React.ReactNode;
  classes?: {
    root?: string;
    type_inline?: string;
    type_stacked?: string;
    type_default?: string;
    [key: string]: any;
  };
};

export const FieldsLayout = (props: FieldsLayoutProps) => {
  const { type = 'default', children, classes: classesProp } = props;
  const classes = useClasses(styles, classesProp);

  return (
    <FieldsLayoutContext.Provider value={type}>
      <div className={clsx(classes?.root, classes?.[`type_${type}`])}>{children}</div>
    </FieldsLayoutContext.Provider>
  );
};
