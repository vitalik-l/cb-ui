import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { UserPanel } from './UserPanel';
import { UserPanelButton } from './UserPanelButton';
import { UserPanelItem } from './UserPanelItem';

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
    <UserPanelItem>Balance: 100$</UserPanelItem>
    <UserPanelButton cropLeft>
      Close Game
    </UserPanelButton>
  </UserPanel>
);
UserPanelTemplate.storyName = 'UserPanel';

export default story;
