import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { GameTableButtons, GameTableButtonsCircular } from './index';
import { GameButton } from '../GameButton';
import { CircularIndicatorTemplate } from '@cb-general/core/CircularIndicator/CircularIndicator.story';

const story = createStory({
  title: 'GameTableButtons',
  component: GameTableButtons,
  style: {
    width: '55rem',
    marginTop: 50,
  },
});

export const GameTableButtonsTemplate: Story = ({ onPlay, ...args }) => (
  <GameTableButtons {...args}>
    <GameButton color="primary" onClick={onPlay}>
      Rebet
    </GameButton>
    <GameButton>X2</GameButton>
    <GameTableButtonsCircular Component={CircularIndicatorTemplate} />
    <GameButton unclickable>Clear</GameButton>
    <GameButton sublabel="bet" unclickable color="green">
      $0.00
    </GameButton>
  </GameTableButtons>
);
GameTableButtonsTemplate.storyName = 'GameTableButtons';

export default story;
