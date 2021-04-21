import React from 'react';
import { Story } from '@storybook/react';

// local files
import { ButtonBase } from './index';
import { index } from '../../story/createStory';

const story = index({
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
