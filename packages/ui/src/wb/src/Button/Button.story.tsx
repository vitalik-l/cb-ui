import React from 'react';
import { Story } from '@storybook/react';
// local files
import { createStory } from '../../story';
import { Button } from './index';

const story = createStory({
  title: 'Button',
  component: Button,
});

export const Template: Story = (args) => <Button {...args}>This is button</Button>;
Template.storyName = 'Button';

export default story;
