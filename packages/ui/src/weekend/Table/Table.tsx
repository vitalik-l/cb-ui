import React from 'react';
import { styled } from '@cb-general/core/utils/styled';
import { Table as CoreTable } from '@cb-general/core/Table';
import { Pager } from '@cb-general/core/Table/Pager';
// local files
import styles from './WkdTable.module.scss';
import pagerStyles from './WkdPager.module.scss';
import { Button } from '../Button';
import { Select } from '../Select';

const PagerButton = (props: React.ComponentProps<typeof Button>) => <Button square {...props} />;

export const Table = styled(CoreTable, styles.root);
Table.defaultProps = {
  pager: <Pager ButtonComponent={PagerButton} SelectComponent={Select} classes={pagerStyles} />,
};
