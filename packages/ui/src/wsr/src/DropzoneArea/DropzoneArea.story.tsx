import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { DropzoneArea } from './index';

const story = createStory({
  title: 'DropzoneArea',
  component: DropzoneArea,
});

export const Template: Story = (args) => <DropzoneArea {...args} />;
Template.storyName = 'DropzoneArea';

export default story;
