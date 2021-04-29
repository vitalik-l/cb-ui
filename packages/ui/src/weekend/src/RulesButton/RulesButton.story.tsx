import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { RulesButton } from './index';

const story = createStory({
  title: 'RulesButton',
  component: RulesButton,
});

export const Template: Story = (args) => <RulesButton {...args}>Open Rules</RulesButton>;
Template.storyName = 'RulesButton';

export default story;
