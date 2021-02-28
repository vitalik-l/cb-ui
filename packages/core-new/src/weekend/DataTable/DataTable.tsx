import React from 'react';
import clsx from 'clsx';
import { DataTable as CoreDataTable, DataTableProps } from '@cb-general/core/DataTable';

// local files
import { Pager, pagerStrings } from './Pager';
import classes from '../styles/classes.module.scss';
import './DataTable.scss';

type Props = DataTableProps & {
  strings?: typeof pagerStrings;
};

export const DataTable = (props: any) => {
  const { className, strings, ...otherProps } = props;

  return (
    <CoreDataTable
      className={clsx(classes.DataTable, className)}
      pager={<Pager strings={strings} />}
      {...otherProps}
    />
  );
};

DataTable.defaultProps = {
  strings: pagerStrings,
};
