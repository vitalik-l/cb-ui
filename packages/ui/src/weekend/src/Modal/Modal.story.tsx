import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { Modal, ModalHeader, ModalContent, ModalActions } from './index';
import { Button } from '../Button';

const story = createStory({
  title: 'Modal',
  component: Modal,
});

export const Template: Story = (args) => (
  <Modal {...args}>
    <ModalHeader>Title</ModalHeader>
    <ModalContent>Modal Content</ModalContent>
    <ModalActions>
      <Button>Submit</Button>
      <Button>Cancel</Button>
    </ModalActions>
  </Modal>
);
Template.storyName = 'Modal';

export default story;
