import { createContainer } from '@cb-general/core/utils/createContainer';

// local files
import { Panel } from '../Panel';
import classes from '../styles/classes.module.scss';
import './TabsPanel.scss';

export const TabsPanel = createContainer(classes.TabsPanel, Panel);
