import clsx from 'clsx';
import React from 'react';
import { Table as CoreTable, TableProps } from '@cb-general/core/Table';
import styles from './FlatTable.module.scss';

type Props = TableProps & {
  bordered?: boolean;
};

export const Table = (props: Props) => {
  const { className, bordered, ...restProps } = props;

  return (
    <CoreTable
      header={false}
      className={clsx(styles.root, className, { [styles.bordered]: bordered })}
      {...restProps}
    />
  );
};
