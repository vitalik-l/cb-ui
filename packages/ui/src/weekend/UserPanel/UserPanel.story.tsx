import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { UserPanel } from './UserPanel';
import { UserPanelButton } from './UserPanelButton';
import { UserPanelItem } from './UserPanelItem';
import { Select } from '../../core/src/Select';
import { UserPanelButtons } from './UserPanelButtons';
import { MenuButton } from '../MenuButton';

const story = createStory({
  title: 'UserPanel',
  component: UserPanel,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
});

export const UserPanelTemplate: Story = (args) => (
  <UserPanel {...args}>
    <UserPanelItem className="text-yellow">UserName</UserPanelItem>
    <UserPanelItem>
      <Select autoWidth defaultValue="USD" format={(value: any) => `Balance: 100${value}`}>
        <option>USD</option>
        <option>BTC</option>
      </Select>
    </UserPanelItem>
    <UserPanelButton cropLeft>Close Game</UserPanelButton>
  </UserPanel>
);
UserPanelTemplate.storyName = 'Default';

export const OnlyButton: Story = (args) => (
  <UserPanel {...args}>
    <UserPanelButton>Login</UserPanelButton>
  </UserPanel>
);

export const Buttons: Story = (args) => (
  <UserPanel {...args}>
    <UserPanelButtons>
      <UserPanelButton>First</UserPanelButton>
      <UserPanelButton>Second</UserPanelButton>
      <MenuButton />
    </UserPanelButtons>
  </UserPanel>
);

export default story;
