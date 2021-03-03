import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { Slider } from './index';

const story = createStory({
  title: 'Slider',
  component: Slider,
});

export const Template: Story = (args) => <Slider {...args} />;
Template.storyName = 'Slider';

export default story;
