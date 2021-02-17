import React from 'react';
import { ButtonBase } from '@cb-general/core/ButtonBase';

// local files
import { createStory } from '../createStory';

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
