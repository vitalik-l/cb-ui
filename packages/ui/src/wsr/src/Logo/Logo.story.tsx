import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { Logo } from './index';

const story = createStory({
  title: 'Logo',
  component: Logo,
});

export const Template: Story = (args) => <Logo {...args} />;
Template.storyName = 'Logo';

export default story;
