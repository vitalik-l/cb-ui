import React from 'react';
import { Table as CoreTable } from '@cb-general/core/Table';
import { Pager } from '@cb-general/core/Table/Pager';
import { styled } from '@cb-general/core/utils/styled';
import { ClassicButton } from '../Button';
import { ClassicSelect } from '../Select';
import styles from './ClassicTable.module.scss';

export const ClassicTable = styled(CoreTable, styles.root);
ClassicTable.defaultProps = {
  pager: <Pager ButtonComponent={ClassicButton} SelectComponent={ClassicSelect} />,
};
