import React from 'react';
import clsx from 'clsx';
import { Table, usePagination, useSortBy, HeaderCell } from 'cb-datatable';

// local files
import classes from '../styles/classes.module.scss';
import './DataTable.scss';

export type DataTableProps = {
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
};

export const DataTable = (props: DataTableProps) => {
  const { rowsPerPage, data = [], className, sortBy, sortable, pager, ...otherProps } = props;
  const { sortedData, ...sorting } = useSortBy({ data, sortBy });
  const { dataPerPage, ...pagination } = usePagination({
    data: sortedData,
    rowsPerPage,
    dataSize: data?.length,
  });

  return (
    <div className={clsx(classes.DataTable, className)}>
      <div className={`${classes.DataTable}-table-wrap`}>
        <Table
          data={dataPerPage}
          headerCell={<HeaderCell sortable={sortable} {...sorting} />}
          {...otherProps}
        />
      </div>
      {Boolean(pager && rowsPerPage && data.length) && React.cloneElement(pager, pagination)}
    </div>
  );
};

DataTable.defaultProps = {
  sortable: true,
};
