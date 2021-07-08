import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { CircularIndicator, CircularIndicatorButton, MobileCircularIndicatorButton } from './index';

const story = createStory({
  title: 'CircularIndicator',
  component: CircularIndicator,
});

export const CircularIndicatorTemplate: Story = (args) => (
  <CircularIndicator {...args}>
    <CircularIndicatorButton>SPIN</CircularIndicatorButton>
  </CircularIndicator>
);
CircularIndicatorTemplate.storyName = 'CircularIndicator';

export const Mobile: Story = (args) => (
  <CircularIndicator {...args}>
    <MobileCircularIndicatorButton>SPIN</MobileCircularIndicatorButton>
  </CircularIndicator>
);
export default story;
