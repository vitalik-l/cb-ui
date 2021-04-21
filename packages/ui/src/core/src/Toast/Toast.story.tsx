import React from 'react';
import { Story } from '@storybook/react';

// local files
import { index } from '../../story/createStory';
import { Toast } from './index';

const story = index({
  title: 'Toast',
  component: Toast,
});

export const Template: Story = (args) => <Toast {...args} />;
Template.storyName = 'Toast';
Template.args = {
  text: 'Toast content',
};

export default story;
