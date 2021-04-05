import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { Button } from './index';
import { NavIcon } from '../icons';

const story = createStory({
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['contained', 'outlined', 'text'],
      },
    },
    disabled: {
      control: 'boolean',
    },
    color: {
      control: {
        type: 'select',
        options: ['default', 'green', 'red', 'primary', 'orange'],
      },
    },
    labelCenter: {
      control: 'boolean',
    },
    large: {
      control: 'boolean',
    },
    theme: {
      control: {
        type: 'select',
        options: ['flat', 'classic', 'bubble'],
      },
    },
  },
  args: {
    variant: 'contained',
  },
});

export const Template: Story = (args) => <Button {...args}>This is Button</Button>;
Template.storyName = 'Button';
export const WithIcon: Story = (args) => (
  <Button {...args} icon={<NavIcon />}>
    This is Button
  </Button>
);

export default story;
