import React from 'react';
import { Story } from '@storybook/react';

// local files
import { index } from '../../story/createStory';
import { CircularIndicatorButton } from './index';

const story = index({
  title: 'CircularIndicator/CircularIndicatorButton',
  component: CircularIndicatorButton,
  style: {
    width: 100,
    height: 100,
  },
});

export const CircularIndicatorTemplate: Story = (args) => <CircularIndicatorButton {...args} />;
CircularIndicatorTemplate.storyName = 'CircularIndicatorButton';
CircularIndicatorTemplate.args = {
  children: 'early exit meter',
};

export default story;
