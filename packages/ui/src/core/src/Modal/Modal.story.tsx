import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story/createStory';
import { Modal } from './index';

const story = createStory({
  title: 'Modal',
  component: Modal,
});

export const Template: Story = (args) => <Modal {...args}>Modal Content</Modal>;
Template.storyName = 'Modal';

export default story;
