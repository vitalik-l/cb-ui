import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { Header, HeaderItem, HeaderTitle } from './index';
import { Logo } from '../Logo';
import { UserPanelTemplate } from '../../weekend/UserPanel/UserPanel.story';

const story = createStory({
  title: 'Header',
  component: Header,
});

export const HeaderTemplate: Story = (props: any) => (
  <Header {...props}>
    <HeaderItem>
      <Logo />
    </HeaderItem>
    <HeaderTitle>Hybrid RNG™ Trading Platform - 24/7/365</HeaderTitle>
    <HeaderItem>
      <UserPanelTemplate />
    </HeaderItem>
  </Header>
);
HeaderTemplate.storyName = 'Header';

export default story;
