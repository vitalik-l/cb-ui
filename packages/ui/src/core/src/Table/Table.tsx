import {
  Table as CbTable,
  TableProps as CbTableProps,
  usePagination,
  useSortBy,
  HeaderCell,
} from 'cb-datatable';
import clsx from 'clsx';
import React from 'react';
import { useClasses } from '../hooks/useClasses';
import { clearProps } from '../utils/clearProps';
import { Pager } from './Pager';
import { TableCell } from './TableCell';
import 'cb-datatable/styles/core.css';
import styles from './CoreTable.module.scss';

type ClassesType = {
  root?: string;
  table?: string;
};

export type TableProps = CbTableProps & {
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
          cell={<TableCell />}
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
