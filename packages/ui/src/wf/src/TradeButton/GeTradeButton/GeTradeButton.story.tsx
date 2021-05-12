import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../../story';
import { GeTradeButton } from './index';

const story = createStory({
  title: 'TradeButton/GeTradeButton',
  component: GeTradeButton,
});

export const Template: Story = (args) => <GeTradeButton {...args} />;
Template.storyName = 'GeTradeButton';

export default story;
