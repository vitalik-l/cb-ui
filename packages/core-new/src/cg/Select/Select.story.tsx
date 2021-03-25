import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { Select } from './index';

const story = createStory({
  title: 'Select',
  component: Select,
});

export const Template: Story = (args) => <Select {...args} />;
Template.storyName = 'Select';

export default story;
