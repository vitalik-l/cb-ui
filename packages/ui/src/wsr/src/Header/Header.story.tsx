import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { Header, HeaderItem } from './index';
import { UserPanelTemplate } from '@cb-general/weekend/UserPanel/UserPanel.story';

const story = createStory({
  title: 'Header',
  component: Header,
});

export const Template: Story = (args) => (
  <Header {...args}>
    <HeaderItem />
    <HeaderItem />
    <HeaderItem>
      <UserPanelTemplate />
    </HeaderItem>
  </Header>
);
Template.storyName = 'Header';

export default story;
