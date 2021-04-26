import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { GameTableLayout } from './index';
import { RouletteWheelTemplate } from '../RouletteWheel/RouletteWheel.story';
import { ChipsControlsTemplate } from '../../../weekend/src/ChipsControls/ChipsControls.story';
import { GameTableButtonsTemplate } from '../../../weekend/src/GameTableButtons/GameTableButtons.story';
import { GameRoundsTemplate } from '../../../weekend/src/GameRounds/GameRounds.story';

const story = createStory({
  title: 'GameTableLayout',
  component: GameTableLayout,
});

export const Template: Story = (args) => {
  return (
    <GameTableLayout>
      <RouletteWheelTemplate />
      <ChipsControlsTemplate />
      <GameTableButtonsTemplate />
      <GameRoundsTemplate />
    </GameTableLayout>
  )
};
Template.storyName = 'GameTableLayout';

export default story;
