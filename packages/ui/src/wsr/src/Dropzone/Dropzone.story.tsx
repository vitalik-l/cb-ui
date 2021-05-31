import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { DropzoneBase } from './index';

const story = createStory({
  title: 'Dropzone',
  component: DropzoneBase,
  argTypes: {
    winner: { control: 'boolean' },
    winnerNumber: { control: 'boolean' },
    selected: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: {
    style: {
      width: '10em',
      height: '10em',
    },
  },
});

export const Template: Story = (args) => <DropzoneBase {...args} />;
Template.storyName = 'Dropzone';

export default story;
