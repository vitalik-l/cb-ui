import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { MobileGameTableLayout } from './index';

const story = createStory({
  title: 'MobileGameTableLayout',
  component: MobileGameTableLayout,
});

export const Template: Story = (args) => <MobileGameTableLayout {...args} />;
Template.storyName = 'MobileGameTableLayout';

export default story;
