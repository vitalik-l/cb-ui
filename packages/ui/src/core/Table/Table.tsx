import React from 'react';
import clsx from 'clsx';
import { Table as CbTable, usePagination, useSortBy, HeaderCell } from 'cb-datatable';
import { useClasses } from '@cb-general/core/hooks/useClasses';
import 'cb-datatable/styles/core.scss';

// local files
import styles from './CoreTable.module.scss';
import { Pager } from './Pager';
import { clearProps } from '../utils/clearProps';

type ClassesType = {
  root?: string;
  table?: string;
};

export type TableProps = {
  className?: string;
  rowsPerPage?: number;
  data?: any;
  sortable?: boolean;
  sortBy?: Array<{
    id: string;
    desc?: boolean;
  }>;
  children?: React.ReactNode;
  pager?: any;
  stickyHeader?: boolean;
  row?: any;
  header?: any;
  classes?: ClassesType;
};

export const Table = (props: TableProps) => {
  const {
    rowsPerPage,
    data = [],
    className,
    sortBy,
    sortable,
    pager,
    classes: classesProp,
    ...otherProps
  } = props;
  const { sortedData, ...sorting } = useSortBy({ data, sortBy });
  const { dataPerPage, ...pagination } = usePagination({
    data: sortedData,
    rowsPerPage,
    dataSize: data?.length,
  });
  const classes: ClassesType = useClasses(styles, classesProp);

  return (
    <div className={clsx(classes.root, className)}>
      <div className={classes.table}>
        <CbTable
          data={dataPerPage}
          headerCell={<HeaderCell sortable={sortable} {...sorting} />}
          {...clearProps(otherProps)}
        />
      </div>
      {Boolean(pager && rowsPerPage && data.length) && React.cloneElement(pager, pagination)}
    </div>
  );
};

Table.defaultProps = {
  sortable: true,
  pager: <Pager />,
};
