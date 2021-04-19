import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { Button } from './Button';
import './WkdButton.module.scss';

const story = createStory({
  title: 'Button',
  component: Button,
  argTypes: {
    disabled: { control: 'boolean' },
    square: { control: 'boolean' },
  },
});

const Template = (args: any) => <Button {...args}>Button</Button>;

export const Default: Story = Template.bind({});
Default.storyName = 'Button';

export default story;
