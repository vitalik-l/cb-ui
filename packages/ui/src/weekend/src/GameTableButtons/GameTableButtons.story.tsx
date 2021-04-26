import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { GameTableButtons } from './index';
import { GameButton } from '../GameButton';

const story = createStory({
  title: 'GameTableButtons',
  component: GameTableButtons,
});

export const GameTableButtonsTemplate: Story = (args) => (
  <GameTableButtons {...args}>
    <GameButton color="primary">Play</GameButton>
    <GameButton>Double</GameButton>
    <GameButton>Clear</GameButton>
    <GameButton sublabel="bet">$0.00</GameButton>
    <GameButton sublabel="pays">$0.00</GameButton>
  </GameTableButtons>
)
GameTableButtonsTemplate.storyName = 'GameTableButtons';

export default story;
