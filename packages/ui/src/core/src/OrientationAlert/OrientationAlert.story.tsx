import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { OrientationAlert } from './index';

const story = createStory({
  title: 'OrientationAlert',
  component: OrientationAlert,
});

export const Template: Story = (args) => (
  <OrientationAlert {...args}>Rotate you phone</OrientationAlert>
);
Template.storyName = 'OrientationAlert';

export default story;
