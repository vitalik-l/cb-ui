import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { CircularIndicator, CircularIndicatorButton } from './index';

const story = createStory({
  title: 'CircularIndicator',
  component: CircularIndicator,
  argTypes: {
    text: { control: 'text' },
  },
});

export const CircularIndicatorTemplate: Story = ({ text, ...args }: any) => (
  <CircularIndicator {...args}>
    <CircularIndicatorButton>{text}</CircularIndicatorButton>
  </CircularIndicator>
);
CircularIndicatorTemplate.storyName = 'CircularIndicator';
CircularIndicatorTemplate.args = {
  text: 'early exit meter',
};

export default story;
