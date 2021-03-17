import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { TradeButton } from './index';
import { TrendIcon } from '../icons';

const story = createStory({
  title: 'TradeButton',
  component: TradeButton,
});

export const Template: Story = (args) => (
  <TradeButton {...args}>
    <div className="flex-fill">
      <div className="text-uppercase">trend up</div>
      <div>BUY</div>
      <div>
        <TrendIcon />
      </div>
    </div>
  </TradeButton>
);
Template.storyName = 'TradeButton';

export default story;
