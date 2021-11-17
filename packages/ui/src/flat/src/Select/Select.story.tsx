import React from 'react';
import { Story } from '@storybook/react';
import { createStory } from '../../story';
import { Select } from './index';

const story = createStory({
  title: 'Select',
  component: Select,
});

export const Template: Story = (args) => (
  <Select {...args}>
    <option>option 1</option>
    <option>option 2</option>
    <option>option 3</option>
    <option>option 4</option>
  </Select>
);
Template.storyName = 'Select';

export default story;
