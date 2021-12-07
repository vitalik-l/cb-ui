import React from 'react';
import { Story } from '@storybook/react';
import { createStory } from '../../../story';
import { CircularIndicatorButton } from './index';

const story = createStory({
  title: 'CircularIndicator/CircularIndicatorButton',
  component: CircularIndicatorButton,
});

export const Template: Story = (args) => <CircularIndicatorButton {...args} />;
Template.storyName = 'CircularIndicatorButton';

export default story;
