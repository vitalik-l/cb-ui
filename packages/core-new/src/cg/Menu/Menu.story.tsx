import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import {Menu, MenuHeader, MenuItemButton, MenuHeaderButton, MenuContent, MenuContentPadding} from './';
import { IconButton } from '../IconButton';
import { CloseIcon } from '../icons';
import { DepositForm } from './DepositForm';
import {Tab, Tabs} from '../Tabs';

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

export const Deposit: Story = () => {
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
      <MenuContentPadding>
        <Tabs>
          <Tab label="Deposit" selected />
          <Tab label="Withdraw" />
        </Tabs>
      </MenuContentPadding>
      <MenuContent>
        <MenuContentPadding>
          <DepositForm />
        </MenuContentPadding>
      </MenuContent>
    </Menu>
  );
};

export default story;
