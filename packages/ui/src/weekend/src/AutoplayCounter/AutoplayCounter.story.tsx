import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { AutoplayCounter } from './index';

const story = createStory({
  title: 'AutoplayCounter',
  component: AutoplayCounter,
});

export const AutoplayCounterTemplate: Story = (args) => (
  <AutoplayCounter {...args}>next deal in 10s</AutoplayCounter>
);
AutoplayCounterTemplate.storyName = 'AutoplayCounter';

export default story;
