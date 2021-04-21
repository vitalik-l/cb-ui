import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { Header, HeaderItem, HeaderTitle } from './index';
import { UserPanelTemplate } from '../UserPanel/UserPanel.story';
import { Logo } from '../../../wf/src/Logo';

const story = createStory({
  title: 'Header',
  component: Header,
});

export const HeaderTemplate: Story = ({ logo, ...props }: any) => (
  <Header {...props}>
    <HeaderItem>{logo}</HeaderItem>
    <HeaderTitle>Hybrid RNG™ Trading Platform - 24/7/365</HeaderTitle>
    <HeaderItem>
      <UserPanelTemplate />
    </HeaderItem>
  </Header>
);
HeaderTemplate.storyName = 'Header';
HeaderTemplate.args = {
  logo: <Logo />,
};

export default story;
