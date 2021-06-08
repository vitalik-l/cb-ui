import { styled } from '@cb-general/core/utils/styled';
import clsx from 'clsx';
import  styles from './Logo.module.scss';

export const Logo = styled<{ small?: boolean }>(({ small }) => clsx(styles.root, small && styles.small));