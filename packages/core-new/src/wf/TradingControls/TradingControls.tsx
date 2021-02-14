import { Panel } from '@cb-general/weekend/Panel';
import { createContainer } from '@cb-general/core/utils/createContainer';

// local files
import classes from '../styles/classes.module.scss';
import './TradingControls.scss';

export const TradingControls = createContainer(classes.TradingControls, Panel);
