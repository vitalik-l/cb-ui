import React from 'react';
import clsx from 'clsx';

// local files
import { FieldsLayoutContext } from './FieldsLayoutContext';
import classes from '../styles/classes.module.scss';

export type FieldsLayoutProps = {
  type?: 'inline' | 'stacked' | 'default';
  children?: React.ReactNode;
};

export const FieldsLayout = (props: FieldsLayoutProps) => {
  const { type = 'default', children } = props;

  return (
    <FieldsLayoutContext.Provider value={type}>
      <div className={clsx(classes.FieldsLayout, `${classes.FieldsLayout}_type_${type}`)}>
        {children}
      </div>
    </FieldsLayoutContext.Provider>
  );
};
