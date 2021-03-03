import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { Button } from './index';

const story = createStory({
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['contained', 'outlined'],
      },
    },
    disabled: {
      control: 'boolean',
    },
    color: {
      control: {
        type: 'select',
        options: ['green'],
      },
    },
  },
  args: {
    variant: 'contained',
  },
});

export const Template: Story = (args) => <Button {...args}>This is Button</Button>;
Template.storyName = 'Button';

export default story;
