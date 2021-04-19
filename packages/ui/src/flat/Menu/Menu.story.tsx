import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { Menu, MenuHeader, MenuItemButton, MenuHeaderButton, MenuContent } from './';
import { IconButton } from '../IconButton';
import { CloseIcon } from '../icons';

const story = createStory({
  title: 'Menu',
  component: Menu,
  style: {
    position: 'relative',
    width: 320,
    height: 300,
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
    <MenuContent>
      <MenuItemButton>MenuItemButton</MenuItemButton>
      <MenuItemButton icon={false}>MenuItemButton icon false</MenuItemButton>
      <MenuItemButton>MenuItemButton</MenuItemButton>
      <MenuItemButton>MenuItemButton</MenuItemButton>
      <MenuItemButton>MenuItemButton</MenuItemButton>
      <MenuItemButton>MenuItemButton</MenuItemButton>
    </MenuContent>
  </Menu>
);
Template.storyName = 'Menu';

export default story;
