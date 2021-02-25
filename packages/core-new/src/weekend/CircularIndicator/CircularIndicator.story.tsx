import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { CircularIndicator } from './CircularIndicator';

const story = createStory({
  title: 'CircularIndicator',
  component: CircularIndicator,
  argTypes: {
    text: { control: 'text' },
  },
});

export const CircularIndicatorTemplate: Story = ({ text, ...args }: any) => (
  <CircularIndicator {...args}>{text}</CircularIndicator>
);
CircularIndicatorTemplate.storyName = 'CircularIndicator';
CircularIndicatorTemplate.args = {
  text: 'early exit meter',
};

export default story;
