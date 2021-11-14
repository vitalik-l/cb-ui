import React from 'react';
import { Story } from '@storybook/react';
import { createStory } from '../../story';
import { Box } from '../Box';
import { ButtonBaseProvider } from './ButtonBaseProvider';
import { ButtonBase } from './index';

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

export const Boxed: Story = (args) => (
  <ButtonBaseProvider clickSound={() => console.log('play sound')}>
    <Box opacity="0.5" color="red">
      <ButtonBase {...args}>Button</ButtonBase>
    </Box>
  </ButtonBaseProvider>
);

export default story;
