import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { CircularIndicator, CircularIndicatorButton } from './index';

const story = createStory({
  title: 'CircularIndicator',
  component: CircularIndicator,
});

export const Template: Story = (args) => (
  <CircularIndicator {...args}>
    <CircularIndicatorButton>SPIN</CircularIndicatorButton>
  </CircularIndicator>
);
Template.storyName = 'CircularIndicator';

export default story;
