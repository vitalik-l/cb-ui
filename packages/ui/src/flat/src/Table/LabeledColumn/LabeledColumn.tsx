import clsx from 'clsx';
import React from 'react';
import { ColumnProps, Column } from '@cb-general/core/Table';
import styles from './FlatLabeledColumn.module.scss';

type Props<T> = ColumnProps<T> & {
  component?: React.ElementType;
};

export function LabeledColumn<T>(props: Props<T>) {
  const { label, value, className, component, ...columnProps } = props;
  const Component = component ?? Column;

  return (
    <div className={clsx(styles.root, className)}>
      <div className={styles.label}>{label}</div>
      <div className={styles.value}>
        <Component value={value ?? '-'} {...columnProps} />
      </div>
    </div>
  );
}
