import React from 'react';
import { Story } from '@storybook/react';
import { Root } from '@cb-general/core/Root';

// local files
import { createStory } from '../createStory';
import { AppLayout } from './index';

const story = createStory({
  title: 'AppLayout',
  component: AppLayout,
});

export const Template: Story = (args) => (
  <Root>
    <AppLayout />
  </Root>
);
Template.storyName = 'AppLayout';

export default story;
