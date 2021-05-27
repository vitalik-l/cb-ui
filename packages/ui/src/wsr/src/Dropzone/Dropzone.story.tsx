import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { Dropzone } from './index';

const story = createStory({
  title: 'Dropzone',
  component: Dropzone,
  argTypes: {
    winner: { control: 'boolean' },
    selected: { control: 'boolean' },
    label: { control: 'text' },
    style: { table: { disable: true } },
  },
  args: {
    style: {
      width: '10em',
      height: '10em',
    },
  },
});

export const Template: Story = (args) => <Dropzone {...args} />;
Template.storyName = 'Dropzone';

export default story;
