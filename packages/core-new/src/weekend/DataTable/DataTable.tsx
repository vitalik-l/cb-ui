import React from 'react';
import clsx from 'clsx';
import { Table as CoreTable } from '@cb-general/core/Table';

// local files
import { Pager, pagerStrings } from './Pager';
import classes from '../styles/classes.module.scss';
import './DataTable.scss';

export const DataTable = (props: any) => {
  const { className, strings, ...otherProps } = props;

  return (
    <CoreTable
      className={clsx(classes.DataTable, className)}
      pager={<Pager strings={strings} />}
      {...otherProps}
    />
  );
};

DataTable.defaultProps = {
  strings: pagerStrings,
};
