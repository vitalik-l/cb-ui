import React from 'react';
import { Table as CoreTable } from '@cb-general/core/Table';
import { Pager } from '@cb-general/core/Table/Pager';
import { styled } from '@cb-general/core/utils/styled';
import { Select } from '@cb-general/weekend/Select';
import { Button } from '../Button';
import pagerStyles from './WbPager.module.scss';
import styles from './WbTable.module.scss';

const PagerButton = (props: React.ComponentProps<typeof Button>) => <Button square {...props} />;

export const Table = styled(CoreTable, styles.root);
Table.defaultProps = {
  pager: <Pager ButtonComponent={PagerButton} SelectComponent={Select} classes={pagerStyles} />,
};
