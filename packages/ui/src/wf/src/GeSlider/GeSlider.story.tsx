import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { GeSlider } from './index';

const story = createStory({
  title: 'GeSlider',
  component: GeSlider,
  style: {
    marginTop: '3rem',
  },
});

export const Template: Story = (args) => <GeSlider {...args} />;
Template.storyName = 'GeSlider';

export default story;
