import React from 'react';
import { Story } from '@storybook/react';
import { ConnectionStatus } from '@cb-general/weekend/ConnectionStatus';
import { Countdown } from '@cb-general/weekend/Countdown';

// local files
import { createStory } from '../../story';
import { TradingControlsLayout } from './index';
import { TickerTemplate } from '../../../weekend/src/Ticker/Ticker.story';
import { CircularIndicatorTemplate } from '../../../core/src/CircularIndicator/CircularIndicator.story';

const story = createStory({
  title: 'TradingControlsLayout',
  component: TradingControlsLayout,
  style: {
    width: '26.5em',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
  },
});

export const TradingControlsTemplate: Story = (args) => (
  <TradingControlsLayout
    {...args}
    ticker={<TickerTemplate />}
    circularIndicator={<CircularIndicatorTemplate />}
    countdown={<Countdown value={15} label="SPINS REMAINING" />}
    connectionStatus={<ConnectionStatus labelRight="offline" labelLeft="connection status:" />}
  />
);
TradingControlsTemplate.storyName = 'TradingControlsLayout';

export default story;
