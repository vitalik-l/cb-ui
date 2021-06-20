import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../../story';
import { GeCircularIndicatorButton } from './index';

const story = createStory({
  title: 'CircularIndicator/GeCircularIndicator/GeCircularIndicatorButton',
  component: GeCircularIndicatorButton,
  style: {
    width: 100,
    height: 100,
    fontSize: '1rem',
  },
});

export const CircularIndicatorTemplate: Story = (args) => <GeCircularIndicatorButton {...args} />;
CircularIndicatorTemplate.storyName = 'GeCircularIndicatorButton';
CircularIndicatorTemplate.args = {
  children: 'P/L Meter',
};

export default story;
