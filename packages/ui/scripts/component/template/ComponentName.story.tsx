import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { ComponentName } from './index';

const story = createStory({
  title: 'ComponentName',
  component: ComponentName,
});

export const Template: Story = (args) => <ComponentName {...args} />;
Template.storyName = 'ComponentName';

export default story;
