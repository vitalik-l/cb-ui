import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { IconButton, ClassicIconButton } from './index';
import { CloseIcon, CopyIcon } from '../icons';

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

export const Classic: Story = (args) => (
  <ClassicIconButton {...args}>
    <CopyIcon />
  </ClassicIconButton>
);

export default story;
