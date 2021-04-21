import React from 'react';
import { Story } from '@storybook/react';
import { Countdown } from '@cb-general/weekend/Countdown';
import { ConnectionStatus } from '@cb-general/weekend/ConnectionStatus';

// local files
import { createStory } from '../../story';
import { TradingControls, tradingControlsStyles } from './index';
import { TradingPanelTemplate } from '../TradingPanel/TradingPanel.story';
import { CircularIndicatorTemplate } from '../../../weekend/src/CircularIndicator/CircularIndicator.story';

const story = createStory({
  title: 'TradingControls',
  component: TradingControls,
  style: { width: '35.5rem' },
});

export const TradingControlsTemplate: Story = (args) => (
  <TradingControls {...args}>
    <div className={tradingControlsStyles.tradingPanels}>
      <TradingPanelTemplate active />
      <TradingPanelTemplate />
      <TradingPanelTemplate />
    </div>
    <div>
      <CircularIndicatorTemplate className={tradingControlsStyles.circularIndicator} />
      <div className="mt-3">
        <span className={tradingControlsStyles.typCountdownLabel}>TIME IN TRADE</span>
        <Countdown value="00:00" className={tradingControlsStyles.countdown} />
      </div>
      <div className={tradingControlsStyles.connectionStatus}>
        <span>CONNECTION STATUS </span>
        <ConnectionStatus />
        <span className="text-red"> OFFLINE</span>
      </div>
    </div>
  </TradingControls>
);
TradingControlsTemplate.storyName = 'TradingControls';

export default story;
