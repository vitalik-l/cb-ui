import React from 'react';
import clsx from 'clsx';
import { Table as CoreTable, TableProps } from '@cb-general/core/Table';

// local files
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
