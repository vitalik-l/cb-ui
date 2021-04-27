import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { ToggleTableButton } from './index';

const story = createStory({
  title: 'ToggleTableButton',
  component: ToggleTableButton,
});

export const Template: Story = (args) => <ToggleTableButton {...args} />;
Template.storyName = 'ToggleTableButton';

export default story;
