import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { Header, headerStyles } from './index';
import { Logo } from '../Logo';
import { UserPanel } from '@cb-general/weekend/UserPanel';

const story = createStory({
  title: 'Header',
  component: Header,
});

export const HeaderTemplate: Story = (props: any) => (
  <Header {...props}>
    <Logo />
    <div className={headerStyles.Title}>Hybrid RNG™ Trading Platform - 24/7/365</div>
    <UserPanel />
  </Header>
);
HeaderTemplate.storyName = 'Header';

export default story;
