import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { GameButton } from './index';

const story = createStory({
  title: 'GameButton',
  component: GameButton,
});

export const Template: Story = (args) => (
  <GameButton {...args}>
    Play
  </GameButton>
);
Template.storyName = 'GameButton';

export default story;
