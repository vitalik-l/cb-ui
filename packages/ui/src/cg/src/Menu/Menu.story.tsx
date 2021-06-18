import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import {
  Menu,
  MenuHeader,
  MenuItemButton,
  MenuHeaderButton,
  MenuContent,
} from './index';
import { IconButton } from '../IconButton';
import { CloseIcon } from '../icons';

const story = createStory({
  title: 'Menu',
  component: Menu,
  style: {
    position: 'absolute',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
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
