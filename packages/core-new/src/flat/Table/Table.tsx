import React from 'react';
import clsx from 'clsx';
import { DataTable, DataTableProps } from '@cb-general/core/DataTable';

// local files
import styles from './Table.module.scss';

type Props = DataTableProps & {
  bordered?: boolean;
};

export const Table = (props: Props) => {
  const { className, bordered, ...restProps } = props;

  return <DataTable header={false} className={clsx(styles.Table, className, {[styles.bordered]: bordered})} {...restProps} />;
};
