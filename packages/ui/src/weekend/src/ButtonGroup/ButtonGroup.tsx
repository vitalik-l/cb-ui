import { styled } from '@cb-general/core/utils/styled';
import { ButtonGroup as CoreButtonGroup } from '@cb-general/core/ButtonGroup';
import styles from './WkdButtonGroup.module.scss';

export const ButtonGroup = styled(CoreButtonGroup, styles);
ButtonGroup.defaultProps = {
  color: 'black',
};
