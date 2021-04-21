import React from 'react';
import { Story } from '@storybook/react';

// local files
import { index } from '../../story/createStory';
import { CircularIndicator, CircularIndicatorButton } from './index';

const story = index({
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
