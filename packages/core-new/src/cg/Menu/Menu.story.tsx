import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { Menu, MenuHeader, MenuItemButton, MenuHeaderButton, MenuContent } from './';
import { IconButton } from '../IconButton';
import { CloseIcon } from '../icons';
import { FormField } from '../../core/Form';
import { SelectField } from '../Form';

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

export const Content: Story = () => {
  return (
    <Menu open>
      <MenuHeader
        closeButton={
          <IconButton>
            <CloseIcon />
          </IconButton>
        }
      >
        <MenuHeaderButton>Deposit / Withdraw</MenuHeaderButton>
      </MenuHeader>
      <MenuContent>
        <form>
          <SelectField
            label="Choose currency:"
            fullWidth
          >
            <option>Bitcoin</option>
            <option>Ether</option>
          </SelectField>
        </form>
      </MenuContent>
    </Menu>
  );
};

export default story;
