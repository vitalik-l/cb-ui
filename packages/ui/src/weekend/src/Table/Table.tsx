import React from 'react';
import { Table as CoreTable } from '@cb-general/core/Table';
import { Pager } from '@cb-general/core/Table/Pager';
import { styled } from '@cb-general/core/utils/styled';
import { Button } from '../Button';
import { Select } from '../Select';
import pagerStyles from './WkdPager.module.scss';
import styles from './WkdTable.module.scss';

const PagerButton = (props: React.ComponentProps<typeof Button>) => <Button square {...props} />;

export const Table = styled(CoreTable, styles.root);
Table.defaultProps = {
  pager: <Pager ButtonComponent={PagerButton} SelectComponent={Select} classes={pagerStyles} />,
};
