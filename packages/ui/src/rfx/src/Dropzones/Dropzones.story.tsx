import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { Dropzones, Dropzone } from './index';

const story = createStory({
  title: 'Dropzones',
  component: Dropzones,
});

export const DropzonesTemplate: Story = (args) => (
  <Dropzones {...args}>
    <Dropzone type="down" />
    <Dropzone type="up" />
  </Dropzones>
);
DropzonesTemplate.storyName = 'Dropzones';

export default story;
