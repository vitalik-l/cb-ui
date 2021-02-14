import React from 'react';

// local files
import { createStory } from '../createStory';
import { ButtonBase } from './ButtonBase';

const story = createStory({
  title: 'ButtonBase',
  component: ButtonBase,
  argTypes: {
    className: { control: 'text' },
    disabled: { control: 'boolean' },
  },
});

export const Template = (args: any) => <ButtonBase {...args}>Button</ButtonBase>;
Template.storyName = 'ButtonBase';

export default story;
