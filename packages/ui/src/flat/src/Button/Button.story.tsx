import React from 'react';
import { Story } from '@storybook/react';
import { createStory } from '../../story';
import { Button } from './index';

const story = createStory({
  title: 'Button',
  component: Button,
  argTypes: {},
});

export const Template: Story = (args) => <Button {...args}>This is Button</Button>;
Template.storyName = 'Button';

export default story;
