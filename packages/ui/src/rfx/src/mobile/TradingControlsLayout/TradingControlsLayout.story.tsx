import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../../story';
import { TradingControlsLayout } from './index';
import { TickerTemplate } from '../../../../weekend/src/Ticker/Ticker.story';
import { CircularIndicatorTemplate } from '../../../../core/src/CircularIndicator/CircularIndicator.story';
import { Countdown } from '../../../../weekend/src/Countdown';

const story = createStory({
  title: 'mobile/TradingControlsLayout',
  component: TradingControlsLayout,
  style: {
    width: '19.5rem',
  },
});

export const TradingControlsLayoutTemplate: Story = (args) => (
  <TradingControlsLayout
    ticker={<TickerTemplate />}
    circularIndicator={<CircularIndicatorTemplate />}
    countdown={<Countdown value={15} label="SPINS REMAINING" />}
    {...args}
  />
);
TradingControlsLayoutTemplate.storyName = 'TradingControlsLayout';

export default story;
