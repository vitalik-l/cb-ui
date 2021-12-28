import clsx from 'clsx';
import React from 'react';
import { TableRow } from '@cb-general/core/Table';
import { get } from '@cb-general/core/utils/get';
import styles from './WbSelectableRow.module.scss';

type SelectableRowProps = React.ComponentProps<typeof TableRow> & {
  selected?: boolean;
  source?: string;
};

export const SelectableRow = (props: SelectableRowProps) => {
  const { selected: selectedProp, source, record, onClick: onClickProp, ...restProps } = props;
  const selected = typeof source === 'string' ? get(record, source, null) : selectedProp;

  return (
    <TableRow
      {...restProps}
      record={record}
      onClick={!selected ? onClickProp : undefined}
      className={clsx(!!onClickProp && styles.clickable, {
        [styles.selected]: !!selected,
        [styles.selectable]: !selected,
      })}
    />
  );
};
