import { Select as CoreSelect } from '@cb-general/core/Select';
import { styled } from '@cb-general/core/utils/styled';
// local files
import styles from './ClassicSelect.module.scss';
export const ClassicSelect = styled(CoreSelect, styles);
ClassicSelect.defaultProps = {
  native: true,
};
