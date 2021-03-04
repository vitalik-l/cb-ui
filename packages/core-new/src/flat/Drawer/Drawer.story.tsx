import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { Drawer } from './index';

const story = createStory({
  title: 'Drawer',
  component: Drawer,
  style: {
    height: 300,
    overflow: 'hidden',
    position: 'relative',
  },
});

export const Template: Story = (args) => <Drawer {...args} />;
Template.storyName = 'Drawer';

export default story;
