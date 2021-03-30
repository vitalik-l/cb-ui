import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { Input } from './index';

const story = createStory({
  title: 'Input',
  component: Input,
});

export const Template: Story = (args) => <Input {...args} />;
Template.storyName = 'Input';

export const WithButton: Story = (args) => <Input {...args} button={<button>Copy</button>} />;

export default story;
