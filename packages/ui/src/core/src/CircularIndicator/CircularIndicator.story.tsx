import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { CircularIndicator, CircularIndicatorButton } from './index';

const story = createStory({
  title: 'CircularIndicator',
  component: CircularIndicator,
  style: {
    fontSize: '1rem',
  },
  argTypes: {
    text: { control: 'text' },
  },
});

export const CircularIndicatorTemplate: Story = ({
  Component = CircularIndicator,
  ButtonComponent = CircularIndicatorButton,
  text,
  ...args
}: any) => (
  <Component {...args}>
    <ButtonComponent>{text}</ButtonComponent>
  </Component>
);
CircularIndicatorTemplate.storyName = 'CircularIndicator';
CircularIndicatorTemplate.args = {
  text: 'early exit meter',
};

export default story;
