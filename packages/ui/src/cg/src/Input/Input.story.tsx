import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { Input, InputButton, ClassicInput, BubbleInput } from './index';
import { ClassicButton } from '../Button';
import { CloseIcon } from '../icons';

const story = createStory({
  title: 'Input',
  component: Input,
});

export const Template: Story = (args) => <Input {...args} />;
Template.storyName = 'Input';

export const WithButton: Story = (args) => (
  <Input {...args} button={<InputButton>Copy</InputButton>} defaultValue="123" readOnly />
);

export const Classic: Story = (args) => <ClassicInput {...args} />;
export const ClassicWithButton: Story = (args) => (
  <ClassicInput
    {...args}
    button={
      <ClassicButton>
        <CloseIcon />
      </ClassicButton>
    }
    defaultValue="123"
    readOnly
  />
);

export const Bubble: Story = (args) => <BubbleInput {...args} />;

export default story;
