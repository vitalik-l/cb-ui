import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { Button } from './Button';
import './WkdButton.module.scss';

const story = createStory({
  title: 'Button',
  component: Button,
  argTypes: {
    disabled: { control: 'boolean' },
    square: { control: 'boolean' },
    selected: { control: 'boolean' },
  },
});

const Template = (args: any) => <Button {...args}>Button</Button>;

export const Default: Story = Template.bind({});
Default.storyName = 'Button';

export default story;
