import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { CircularIndicator, CircularIndicatorButton } from './index';

const story = createStory({
  title: 'CircularIndicator',
  component: CircularIndicator,
  argTypes: {
    text: { control: 'text' },
    theme: { control: { type: null } },
    color: {
      control: {
        type: 'select',
        options: ['green', 'red', 'black'],
      },
    },
    disabled: { control: 'boolean' },
  },
  args: {
    color: 'black',
  },
});

export const CircularIndicatorTemplate: Story = ({
  text,
  theme,
  color,
  disabled,
  ...args
}: any) => (
  <CircularIndicator {...args}>
    <CircularIndicatorButton color={color} disabled={disabled}>
      {text}
    </CircularIndicatorButton>
  </CircularIndicator>
);
CircularIndicatorTemplate.storyName = 'CircularIndicator';
CircularIndicatorTemplate.args = {
  text: 'early exit meter',
};

export default story;
