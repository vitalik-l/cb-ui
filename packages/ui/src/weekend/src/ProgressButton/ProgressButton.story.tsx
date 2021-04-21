import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { ProgressButton } from './index';

const story = createStory({
  title: 'ProgressButton',
  component: ProgressButton,
});

// remove next comment
// eslint-disable-next-line
export const Template: Story = (args) => <ProgressButton {...args} />;
Template.storyName = 'ProgressButton';

export default story;
