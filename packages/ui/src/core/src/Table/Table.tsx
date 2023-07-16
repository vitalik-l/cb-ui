import {
  Table as CbTable,
  TableProps as CbTableProps,
  usePagination,
  useSortBy,
  HeaderCell,
  SortBy,
} from 'cb-datatable';
import clsx from 'clsx';
import React from 'react';
import {useClasses} from '../hooks/useClasses';
import {clearProps} from '../utils/clearProps';
import {Pager} from './Pager';
import {TableCell} from './TableCell';
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
  sortBy?: Array<SortBy>;
  children?: React.ReactNode;
  pager?: any;
  stickyHeader?: boolean;
  row?: any;
  header?: any;
  classes?: ClassesType;
  defaultSortBy?: Array<SortBy>;
  onSort?: (value: Array<SortBy>) => void;
  manualSorting?: boolean;
  multiSort?: boolean;
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
    defaultSortBy,
    onSort,
    manualSorting,
    multiSort,
    ...otherProps
  } = props;
  const {sortedData, ...sorting} = useSortBy({data: manualSorting ? undefined : data, sortBy, defaultSortBy, onSort});
  const {dataPerPage, ...pagination} = usePagination({
    data: sortedData ?? data,
    rowsPerPage,
    dataSize: data?.length,
  });
  const classes: ClassesType = useClasses(styles, classesProp);

  return (
    <div className={clsx(classes.root, className)}>
      <div className={classes.table}>
        <CbTable
          data={dataPerPage}
          cell={<TableCell/>}
          headerCell={<HeaderCell sortable={sortable} multiSort={multiSort} {...sorting} />}
          {...clearProps(otherProps)}
        />
      </div>
      {Boolean(pager && rowsPerPage && data.length) && React.cloneElement(pager, pagination)}
    </div>
  );
};

Table.defaultProps = {
  sortable: true,
  pager: <Pager/>,
};
