import React from 'react';
import { Story, Parameters } from '@storybook/react';
// local files
import { createStory } from '../../story';
import { RouletteWheel } from './index';

const story = createStory({
  title: 'RouletteWheel',
  component: RouletteWheel,
  args: {
    value: null,
  },
});

export const RouletteWheelTemplate: Story = (args) => (
  <RouletteWheel {...args}>
    <div className="d-flex center w-100 h-100">Wheel Content</div>
  </RouletteWheel>
);
RouletteWheelTemplate.storyName = 'RouletteWheel';

export default story;
