import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { MobileGameTableLayout } from './index';
import {RouletteWheelTemplate} from '../RouletteWheel/RouletteWheel.story';
import {Dropzone, Dropzones} from '../Dropzones';
import { MobileChipsControlsTemplate } from '../MobileChipsControls/MobileChipsControls.story';
import {GameRoundsTemplate} from '../../../weekend/src/GameRounds/GameRounds.story';
import {AutoplayCounterTemplate} from '../../../weekend/src/AutoplayCounter/AutoplayCounter.story';
import {GameButton} from '../../../weekend/src/GameButton';
import {GameTableButtons} from '../../../weekend/src/GameTableButtons';

const story = createStory({
  title: 'MobileGameTableLayout',
  component: MobileGameTableLayout,
});

export const Template: Story = (args) => {
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
    <MobileGameTableLayout
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
      chips={<MobileChipsControlsTemplate />}
      buttons={
        <GameTableButtons>
          <GameButton color="primary" onClick={onPlay}>
            Play
          </GameButton>
          <GameButton>Double</GameButton>
          <GameButton>Clear</GameButton>
          <GameButton sublabel="bet" unclickable sublabelAlignTop>
            $0.00
          </GameButton>
          <GameButton sublabel="chart" unclickable sublabelAlignTop color="green">
            $0.00
          </GameButton>
        </GameTableButtons>
      }
      gameRounds={<GameRoundsTemplate />}
      autoplayCounter={<AutoplayCounterTemplate />}
    />
  );
};
Template.storyName = 'MobileGameTableLayout';

export default story;
