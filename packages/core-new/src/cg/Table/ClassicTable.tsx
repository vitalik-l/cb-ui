import { styled } from '@cb-general/core/utils/styled';
import { DataTable as CoreTable } from '@cb-general/core/DataTable';
import { Pager } from '@cb-general/core/DataTable/Pager';
// local files
import styles from './ClassicTable.module.scss';
import { ClassicButton } from '../Button';
import { ClassicSelect } from '../Select';

export const ClassicTable = styled(CoreTable, styles.root);
ClassicTable.defaultProps = {
  pager: <Pager ButtonComponent={ClassicButton} SelectComponent={ClassicSelect} />,
};
