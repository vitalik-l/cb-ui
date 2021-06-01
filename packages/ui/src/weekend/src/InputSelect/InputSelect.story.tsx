import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { InputSelect } from './index';

const story = createStory({
  title: 'InputSelect',
  component: InputSelect,
  argTypes: {
    disabled: { control: 'boolean' },
    input: {
      table: { disable: true },
    },
  },
});

export const Template: Story = (args) => (
  <InputSelect {...args}>
    <option>0.5</option>
    <option>1</option>
    <option>5</option>
  </InputSelect>
);
Template.storyName = 'InputSelect';

export default story;
