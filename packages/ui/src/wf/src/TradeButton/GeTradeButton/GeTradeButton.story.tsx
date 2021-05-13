import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../../story';
import { GeTradeButton } from './index';
import { TradeButtonTemplate } from '../TradeButton.story';

const story = createStory({
  title: 'TradeButton/GeTradeButton',
  component: GeTradeButton,
  argTypes: {
    Component: { control: null },
  },
});

export const GeTradeButtonTemplate: Story = (args) => (
  <TradeButtonTemplate Component={GeTradeButton} {...args} />
);
GeTradeButtonTemplate.storyName = 'GeTradeButton';

export default story;
