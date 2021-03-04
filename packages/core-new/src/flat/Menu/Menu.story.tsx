import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { Menu } from './';

const story = createStory({
  title: 'Menu',
  component: Menu,
  style: {
    position: 'relative',
    width: 320,
    height: 500,
  }
});

export const Template: Story = (args) => <Menu {...args} />;
Template.storyName = 'Menu';

export default story;
