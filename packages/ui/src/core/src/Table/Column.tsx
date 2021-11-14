import { Column as CbColumn, ColumnProps as CbColumnProps } from 'cb-datatable';
import React from 'react';
import { BosStylesProps } from '../Box';

// concat Column component props with extended TableCell component
export type ColumnProps<T> = CbColumnProps<T> & BosStylesProps;

export function Column<T>(props: ColumnProps<T>): JSX.Element {
  return <CbColumn {...props} />;
}
