import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { Button, ClassicButton, BubbleButton } from './index';
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

export const Classic: Story = (args) => (
  <ClassicButton {...args}>This is classic button</ClassicButton>
);

export const Bubble: Story = (args) => <BubbleButton {...args}>This is bubble button</BubbleButton>;

export default story;
