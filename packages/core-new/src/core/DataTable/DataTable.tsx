import React from 'react';
import clsx from 'clsx';
import { Table, usePagination, useSortBy, HeaderCell } from 'cb-datatable';
import 'cb-datatable/styles/core.scss';

// local files
import styles from './CoreDataTable.module.scss';

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
  header?: any;
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
    <div className={clsx(styles.root, className)}>
      <div className={styles.table}>
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
