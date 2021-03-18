import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { MobileLayout } from './index';

const story = createStory({
  title: 'MobileLayout',
  component: MobileLayout,
});

export const Template: Story = (args) => <MobileLayout {...args} />;
Template.storyName = 'MobileLayout';

export default story;
