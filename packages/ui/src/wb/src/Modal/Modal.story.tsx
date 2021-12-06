import React from 'react';
import { Story } from '@storybook/react';
import { createStory } from '../../story';
import { Button } from '../Button';
import { Modal, ModalHeader, ModalContent, ModalActions } from './index';

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
