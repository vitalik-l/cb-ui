import { createStory } from 'StoryPath';
import React from 'react';
import { Story } from '@storybook/react';
import { ComponentName } from './index';

const story = createStory({
  title: 'ComponentPathComponentName',
  component: ComponentName,
});

export const Template: Story = (args) => <ComponentName {...args} />;
Template.storyName = 'ComponentName';

export default story;
