import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { DesktopLayout } from './index';

const story = createStory({
  title: 'DesktopLayout',
  component: DesktopLayout,
});

export const Template: Story = (args) => <DesktopLayout {...args} />;
Template.storyName = 'DesktopLayout';

export default story;
