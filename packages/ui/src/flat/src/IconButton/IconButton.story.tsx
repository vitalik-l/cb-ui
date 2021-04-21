import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { IconButton } from './index';
import { CloseIcon } from '../icons';

const story = createStory({
  title: 'IconButton',
  component: IconButton,
});

export const Template: Story = (args) => (
  <IconButton {...args}>
    <CloseIcon />
  </IconButton>
);
Template.storyName = 'IconButton';

export default story;
