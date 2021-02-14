import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { Select } from './Select';

const story = createStory({
  title: 'Select',
  component: Select,
  argTypes: {
    disabled: { control: 'boolean' },
  },
});

// remove next comment
// eslint-disable-next-line
const Template = (args: any) => (
  <Select {...args}>
    <option>1</option>
    <option>5</option>
    <option>500</option>
  </Select>
);

// uncomment next line
export const Default: Story = Template.bind({});
Default.storyName = 'Select';

export default story;
