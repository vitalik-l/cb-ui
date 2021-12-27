import { ButtonBase } from '@cb-general/core/ButtonBase';
import { ButtonGroup } from '@cb-general/core/ButtonGroup';
import { styled } from '@cb-general/core/utils/styled';
import tabStyles from './WbTab.module.scss';
import styles from './WbTabs.module.scss';

export const Tabs = styled(ButtonGroup, styles);
export const Tab = styled(ButtonBase, tabStyles);
