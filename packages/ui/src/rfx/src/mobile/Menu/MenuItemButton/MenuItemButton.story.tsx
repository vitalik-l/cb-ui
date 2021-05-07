import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../../../story';
import { MenuItemButton } from './index';

const story = createStory({
  title: 'mobile/Menu/MenuItemButton',
  component: MenuItemButton,
  argTypes: {
    children: {
      control: 'text',
    },
  },
});

export const Template: Story = (args) => <MenuItemButton {...args} />;
Template.storyName = 'MenuItemButton';
Template.args = {
  children: 'Trading',
};

export default story;
