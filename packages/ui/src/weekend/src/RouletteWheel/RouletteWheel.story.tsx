import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { RouletteWheel } from './index';

const story = createStory({
  title: 'RouletteWheel',
  component: RouletteWheel,
});

export const RouletteWheelTemplate: Story = (args) => <RouletteWheel {...args} />;
RouletteWheelTemplate.storyName = 'RouletteWheel';

export default story;
