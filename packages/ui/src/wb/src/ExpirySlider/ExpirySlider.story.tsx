import { createStory } from '../../story';
import React from 'react';
import { Story } from '@storybook/react';
import { ExpirySlider } from './index';

const story = createStory({
  title: 'ExpirySlider',
  component: ExpirySlider,
});

export const Template: Story = (args) => <ExpirySlider {...args} />;
Template.storyName = 'ExpirySlider';

export default story;
