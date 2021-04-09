import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { CircularIndicatorButton } from './index';

const story = createStory({
  title: 'CircularIndicator/CircularIndicatorButton',
  component: CircularIndicatorButton,
  style: {
    width: 100,
    height: 100,
  }
});

export const CircularIndicatorTemplate: Story = (args) => (
  <CircularIndicatorButton {...args} />
);
CircularIndicatorTemplate.storyName = 'CircularIndicatorButton';
CircularIndicatorTemplate.args = {
  children: 'early exit meter',
};

export default story;
