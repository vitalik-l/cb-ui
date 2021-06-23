import React from 'react';
import { Story } from '@storybook/react';

// local files
import { ButtonBase } from './index';
import { createStory } from '../../story';
import { ButtonBaseProvider } from './ButtonBaseProvider';

const story = createStory({
  title: 'ButtonBase',
  component: ButtonBase,
});

export const Template: Story = (args) => <ButtonBase {...args}>Button</ButtonBase>;
Template.storyName = 'ButtonBase';

export const WithClickSound: Story = (args) => (
  <ButtonBaseProvider clickSound={() => console.log('play sound')}>
    <ButtonBase {...args}>Button</ButtonBase>
  </ButtonBaseProvider>
);

export default story;
