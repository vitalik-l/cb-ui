import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { GameTableButtons } from './index';
import { GameButton } from '../GameButton';

const story = createStory({
  title: 'GameTableButtons',
  component: GameTableButtons,
  style: {
    width: 545,
  },
});

export const GameTableButtonsTemplate: Story = ({ onPlay, ...args }) => (
  <GameTableButtons {...args}>
    <GameButton color="primary" onClick={onPlay}>
      Play
    </GameButton>
    <GameButton>Double</GameButton>
    <GameButton>Clear</GameButton>
    <GameButton sublabel="bet" unclickable>
      $0.00
    </GameButton>
    <GameButton sublabel="pays" unclickable>
      $0.00
    </GameButton>
  </GameTableButtons>
);
GameTableButtonsTemplate.storyName = 'GameTableButtons';

export default story;
