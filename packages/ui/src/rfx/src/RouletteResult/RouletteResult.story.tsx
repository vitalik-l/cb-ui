import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { RouletteResult } from './index';

const story = createStory({
  title: 'RouletteResult',
  component: RouletteResult,
});

export const Template: Story = (args) => <RouletteResult {...args} />;
Template.storyName = 'RouletteResult';

export default story;
