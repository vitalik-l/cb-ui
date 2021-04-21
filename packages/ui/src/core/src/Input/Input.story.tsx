import React from 'react';
import { Story } from '@storybook/react';

// local files
import { index } from '../../story/createStory';
import { Input } from './index';

const story = index({
  title: 'Input',
  component: Input,
});

export const Template: Story = (args) => <Input {...args} />;
Template.storyName = 'Input';

export const WithButton: Story = (args) => <Input {...args} button={<button>Copy</button>} />;

export default story;
