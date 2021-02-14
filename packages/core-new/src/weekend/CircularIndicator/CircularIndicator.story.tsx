import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { CircularIndicator } from './CircularIndicator';
import { CircularIndicatorButton } from './CircularIndicatorButton';

const story = createStory({
  title: 'CircularIndicator',
  component: CircularIndicator,
  argTypes: {
    text: { control: 'text' },
    disabled: { control: 'boolean' },
  },
});

export const CircularIndicatorTemplate: Story = ({ text, disabled, color, ...args }: any) => (
  <CircularIndicator {...args}>
    <CircularIndicatorButton disabled={disabled} color={color}>
      {text}
    </CircularIndicatorButton>
  </CircularIndicator>
);
CircularIndicatorTemplate.storyName = 'CircularIndicator';
CircularIndicatorTemplate.args = {
  text: 'early exit meter',
};

export default story;
