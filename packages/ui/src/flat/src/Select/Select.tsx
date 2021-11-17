import { Select as CoreSelect } from '@cb-general/core/Select';
import { styled } from '@cb-general/core/utils/styled';
import styles from './FlatSelect.module.scss';

export const Select = styled(CoreSelect, styles);
Select.defaultProps = {
  native: true,
};
