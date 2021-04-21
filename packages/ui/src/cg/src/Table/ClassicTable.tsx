import React from 'react';
import { styled } from '@cb-general/core/utils/styled';
import { Table as CoreTable } from '@cb-general/core/Table';
import { Pager } from '@cb-general/core/Table/Pager';
// local files
import styles from './ClassicTable.module.scss';
import { ClassicButton } from '../Button';
import { ClassicSelect } from '../Select';

export const ClassicTable = styled(CoreTable, styles.root);
ClassicTable.defaultProps = {
  pager: <Pager ButtonComponent={ClassicButton} SelectComponent={ClassicSelect} />,
};
