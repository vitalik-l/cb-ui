import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { RouletteNumber } from './index';

const story = createStory({
  title: 'RouletteNumber',
  component: RouletteNumber,
  argTypes: {
    children: {
      control: 'text',
    },
  },
  args: {
    active: true,
  },
});

export const Template: Story = (args) => <RouletteNumber {...args} />;
Template.storyName = 'RouletteNumber';

export default story;
