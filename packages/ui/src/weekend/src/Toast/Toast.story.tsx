import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { Toast } from './index';

const story = createStory({
  title: 'Toast',
  component: Toast,
});

export const Template: Story = (args) => <Toast {...args} />;
Template.storyName = 'Toast';
Template.args = {
  text: 'Toast content',
};

export default story;
