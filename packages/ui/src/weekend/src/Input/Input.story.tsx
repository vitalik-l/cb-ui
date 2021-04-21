import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { Input } from './index';

const story = createStory({
  title: 'Input',
  component: Input,
});

export const Template: Story = (args) => <Input {...args} />;
Template.storyName = 'Input';

export default story;
