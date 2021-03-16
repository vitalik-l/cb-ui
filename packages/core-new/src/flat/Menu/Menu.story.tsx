import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { Menu, MenuHeader, MenuItemButton, MenuHeaderButton } from './';
import { IconButton } from '../IconButton';
import { CloseIcon } from '../icons';

const story = createStory({
  title: 'Menu',
  component: Menu,
  style: {
    position: 'relative',
    width: 320,
    height: 500,
  },
});

export const Template: Story = (args) => (
  <Menu {...args}>
    <MenuHeader
      closeButton={
        <IconButton>
          <CloseIcon />
        </IconButton>
      }
    >
      <MenuHeaderButton>General / Game Settings</MenuHeaderButton>
    </MenuHeader>
    <MenuItemButton label="MenuItemButton" />
  </Menu>
);
Template.storyName = 'Menu';

export default story;
