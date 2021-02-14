import React from 'react';
import { Story } from '@storybook/react';
import { Select } from '@cb-general/weekend/Select';
import { Slider } from '@cb-general/weekend/Slider';

// local files
import { createStory } from '../createStory';
import { TradingPanelLayout } from './index';
import { TradingPanelSymbol } from '../TradingPanel';
import { TradeButtonTemplate } from '../TradeButton/TradeButton.story';

const story = createStory({
  title: 'TradingPanelLayout',
  component: TradingPanelLayout,
  argTypes: {
    active: { control: 'boolean' },
    symbol: {},
    slider: {},
    pipInfo: {},
    select: {},
    tradeButtons: {},
  },
});

const TradingPanelLayoutTemplate: Story = ({ active, ...restArgs }) => (
  <TradingPanelLayout
    active={active}
    symbol={<TradingPanelSymbol symbol="red/black" />}
    slider={
      <div>
        <div className="d-flex justify-between">
          <div>Min</div>
          <div>Stop Loss</div>
          <div>Max</div>
        </div>
        <Slider />
      </div>
    }
    select={
      <Select>
        <option>1</option>
        <option>5</option>
        <option>500</option>
      </Select>
    }
    buttons={[<TradeButtonTemplate key="up" />, <TradeButtonTemplate key="down" />]}
    {...restArgs}
  />
);
TradingPanelLayoutTemplate.storyName = 'TradingPanelLayout';

export default story;
