import { styled } from '@cb-general/core/utils/styled';
import { DataTable as CoreTable } from '@cb-general/core/DataTable';
import { Pager } from '@cb-general/core/DataTable/Pager';
// local files
import styles from './ClassicTable.module.scss';
import { ClassicButton } from '../Button';
import { ClassicSelect } from '../Select';

export const Table = styled(CoreTable, styles.root);
Table.defaultProps = {
  pager: <Pager ButtonComponent={ClassicButton} SelectComponent={ClassicSelect} />,
};
