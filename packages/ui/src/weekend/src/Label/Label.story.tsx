import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { Label } from './index';

const story = createStory({
  title: 'Label',
  component: Label,
});

export const Template: Story = (args) => <Label {...args}>label</Label>;
Template.storyName = 'Label';

export default story;
