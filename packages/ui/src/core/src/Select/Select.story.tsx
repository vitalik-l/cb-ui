import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { Select } from './Select';
import { Option } from './Option';

const story = createStory({
  title: 'Select',
  component: Select,
  argTypes: {
    disabled: { control: 'boolean' },
    icon: {},
    portalTarget: {
      table: { disable: true },
    },
  },
});

const Template: Story = (args) => (
  <Select {...args} icon={undefined} defaultValue={1}>
    <option>1</option>
    <option>5</option>
    <option>500</option>
  </Select>
);
export const Default: Story = Template.bind({});
Default.storyName = 'Select';

export const Custom: Story = (args) => (
  <Select
    {...args}
    portalTarget={args.portalTarget === false ? false : undefined}
    icon={undefined}
    defaultValue={1}
    native={false}
  >
    <Option value={1}>1</Option>
    <Option value={5}>5</Option>
    <Option value={500}>500</Option>
  </Select>
);

export default story;
