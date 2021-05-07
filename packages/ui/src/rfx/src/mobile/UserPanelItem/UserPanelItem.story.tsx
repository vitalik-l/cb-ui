import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../../story';
import { UserPanelItem } from './index';

const story = createStory({
  title: 'mobile/UserPanelItem',
  component: UserPanelItem,
});

export const Template: Story = (args) => <UserPanelItem {...args} />;
Template.storyName = 'UserPanelItem';

export default story;
