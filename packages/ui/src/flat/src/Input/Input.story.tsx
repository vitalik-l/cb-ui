import React from 'react';
import { Story } from '@storybook/react';
import { createStory } from '../../story';
import { Input, InputButton } from './index';

const story = createStory({
  title: 'Input',
  component: Input,
});

export const Template: Story = (args) => <Input {...args} />;
Template.storyName = 'Input';

export const WithButton: Story = (args) => (
  <Input {...args} button={<InputButton>Copy</InputButton>} defaultValue="123" readOnly />
);

export default story;
