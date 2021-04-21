import React from 'react';
import { Story } from '@storybook/react';

// local files
import { ButtonBase } from './index';
import { createStory } from '../../story';

const story = createStory({
  title: 'ButtonBase',
  component: ButtonBase,
  argTypes: {
    className: { control: 'text' },
    disabled: { control: 'boolean' },
  },
});

export const Template: Story = (args) => <ButtonBase {...args}>Button</ButtonBase>;
Template.storyName = 'ButtonBase';

export default story;
