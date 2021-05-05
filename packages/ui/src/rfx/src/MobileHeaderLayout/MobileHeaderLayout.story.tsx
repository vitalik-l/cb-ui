import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { MobileHeaderLayout } from './index';

const story = createStory({
  title: 'MobileHeaderLayout',
  component: MobileHeaderLayout,
});

export const MobileHeaderTemplate: Story = (args) => <MobileHeaderLayout {...args} />;
MobileHeaderTemplate.storyName = 'MobileHeaderLayout';

export default story;
