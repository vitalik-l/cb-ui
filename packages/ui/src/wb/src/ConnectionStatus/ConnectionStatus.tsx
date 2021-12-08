import { styled } from '@cb-general/core/utils/styled';
import styles from './WbConnectionStatus.module.scss';

export const ConnectionStatus = styled<{ active?: boolean }>(({ active }) => [
  styles.root,
  active && styles.active,
]);
