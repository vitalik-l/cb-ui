import React from 'react';
import { Story } from '@storybook/react';

// local files
import { index } from '../../story/createStory';
import { Label } from './index';

const story = index({
  title: 'Label',
  component: Label,
});

export const Template: Story = (args) => <Label {...args}>label</Label>;
Template.storyName = 'Label';

export default story;
