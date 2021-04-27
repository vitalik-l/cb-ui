import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { GameTableLayout } from './index';
import { RouletteWheelTemplate } from '../RouletteWheel/RouletteWheel.story';
import { ChipsControlsTemplate } from '../../../weekend/src/ChipsControls/ChipsControls.story';
import { GameTableButtonsTemplate } from '../../../weekend/src/GameTableButtons/GameTableButtons.story';
import { GameRoundsTemplate } from '../../../weekend/src/GameRounds/GameRounds.story';
import { Dropzones, Dropzone } from '../Dropzones';

const story = createStory({
  title: 'GameTableLayout',
  component: GameTableLayout,
});

export const Template: Story = (args) => {
  const [result, setResult] = React.useState<number | null>(null);

  const onPlay = () => {
    setResult(10);
  }

  const onWheelStop = () => {
    setResult(null);
  }

  return (
    <GameTableLayout
      rouletteWheel={
        <RouletteWheelTemplate value={result} onWheelStop={onWheelStop}>
          <Dropzones>
            <Dropzone type="down" />
            <Dropzone type="up" />
          </Dropzones>
        </RouletteWheelTemplate>
      }
      chips={<ChipsControlsTemplate />}
      buttons={<GameTableButtonsTemplate onPlay={onPlay} />}
      gameRounds={<GameRoundsTemplate />}
    />
  )
};
Template.storyName = 'GameTableLayout';

export default story;
