import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { IconButton } from './index';
// @ts-ignore
import { MenuIcon } from '../../../icons/src/MenuIcon';

const story = createStory({
  title: 'IconButton',
  component: IconButton,
});

export const Template: Story = (args) => (
  <IconButton {...args}>
    <MenuIcon />
  </IconButton>
);
Template.storyName = 'IconButton';

export default story;
