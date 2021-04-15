import React from 'react';
import { styled } from '@cb-general/core/utils/styled';
import { Table as CoreTable } from '@cb-general/core/Table';
import { Pager } from '@cb-general/core/Table/Pager';
// local files
import styles from './CgTable.module.scss';
import { Button } from '../Button';
import { Select } from '../Select';

export const Table = styled(CoreTable, styles);
Table.defaultProps = {
  pager: <Pager ButtonComponent={Button} SelectComponent={Select} />,
};
