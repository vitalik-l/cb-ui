import { styled } from '@cb-general/core/utils/styled';
import styles from './Logo.module.scss';

export const Logo = styled<{ small?: boolean }>(({ small }) => [
  styles.root,
  small && styles.small,
]);
