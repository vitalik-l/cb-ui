import { TableCell as CbTableCell } from 'cb-datatable';
import React from 'react';
import { Box, BosStylesProps } from '../Box';

export const TableCell = (props: BosStylesProps & React.ComponentProps<typeof CbTableCell>) => {
  return <Box as={CbTableCell} {...props} />;
};
