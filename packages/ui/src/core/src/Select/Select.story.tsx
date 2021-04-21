import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { Select } from './Select';

const story = createStory({
  title: 'Select',
  component: Select,
  argTypes: {
    disabled: { control: 'boolean' },
    icon: {},
  },
});

// remove next comment
// eslint-disable-next-line
const Template = (args: any) => (
  <Select {...args} icon={undefined} defaultValue={1}>
    <option>1</option>
    <option>5</option>
    <option>500</option>
  </Select>
);

// uncomment next line
export const Default: Story = Template.bind({});
Default.storyName = 'Select';

export default story;
