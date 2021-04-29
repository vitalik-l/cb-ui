import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { GameTableLayout } from './index';
import { RouletteWheelTemplate } from '../RouletteWheel/RouletteWheel.story';
import { ChipsControlsTemplate } from '../../../weekend/src/ChipsControls/ChipsControls.story';
import { GameTableButtonsTemplate } from '../../../weekend/src/GameTableButtons/GameTableButtons.story';
import { GameRoundsTemplate } from '../../../weekend/src/GameRounds/GameRounds.story';
import { AutoplayCounterTemplate } from '../../../weekend/src/AutoplayCounter/AutoplayCounter.story';
import { Dropzones, Dropzone } from '../Dropzones';

const story = createStory({
  title: 'GameTableLayout',
  component: GameTableLayout,
});

export const GameTableLayoutTemplate: Story = (args) => {
  const [result, setResult] = React.useState<number | null>(null);
  const [hidden, setHidden] = React.useState(false);

  const onPlay = () => {
    setResult(10);
  };

  const onWheelStop = () => {
    setResult(null);
  };

  const toggle = () => {
    setHidden(!hidden);
  };

  return (
    <GameTableLayout
      hidden={hidden}
      onToggle={toggle}
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
      autoplayCounter={<AutoplayCounterTemplate />}
    />
  );
};
GameTableLayoutTemplate.storyName = 'GameTableLayout';

export default story;
