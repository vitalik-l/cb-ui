import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { Drawer } from './index';

const story = createStory({
  title: 'Drawer',
  component: Drawer,
});

export const Template: Story = (args) => (
  <div style={{
    height: '100%',
    width: '100%',
    background: 'black',
    position: 'absolute',
    overflow: 'hidden',
    top: 0,
    left: 0,
  }}>
    <Drawer {...args} />
  </div>
);
Template.storyName = 'Drawer';

export default story;
