import React from 'react';
import { Story } from '@storybook/react';
import { createStory } from '../../story';
import { TradeButton } from './index';

const story = createStory({
  title: 'TradeButton',
  component: TradeButton,
});

export const Template: Story = (args) => <TradeButton {...args}>CALL/UP</TradeButton>;
Template.storyName = 'TradeButton';

export default story;
