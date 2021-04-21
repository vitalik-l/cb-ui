import React from 'react';
import { Story } from '@storybook/react';

// local files
import { index } from '../../story/createStory';
import { Modal, ModalHeader, ModalContent, ModalActions } from './index';
import { Button } from '../Button';

const story = index({
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
