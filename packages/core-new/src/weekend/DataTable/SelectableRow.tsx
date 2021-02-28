import React from 'react';
import { TableRow } from '@cb-general/core/DataTable';
import { get } from '@cb-general/core/utils/get';
import clsx from 'clsx';

// local files
import styles from './WkdSelectableRow.module.scss';

export const SelectableRow = (props: any) => {
  const { selected: selectedProp, source, record, onClick: onClickProp, ...restProps } = props;
  const selected = typeof source === 'string' ? get(record, source, null) : selectedProp;

  return (
    <TableRow
      {...restProps}
      record={record}
      onClick={!selected ? onClickProp : undefined}
      className={clsx({ [styles.selected]: !!selected, [styles.selectable]: !selected })}
    />
  );
};
