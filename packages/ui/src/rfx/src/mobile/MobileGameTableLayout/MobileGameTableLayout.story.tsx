import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../../story';
import { MobileGameTableLayout } from './index';
import { RouletteWheelTemplate } from '../../RouletteWheel/RouletteWheel.story';
import { Dropzone, Dropzones } from '../../Dropzones';
import { ChipsControlsTemplate } from '../ChipsControls/ChipsControls.story';
import { GameRoundsTemplate } from '../../../../weekend/src/GameRounds/GameRounds.story';
import { AutoplayCounterTemplate } from '../../../../weekend/src/AutoplayCounter/AutoplayCounter.story';
import { GameButton } from '../../../../weekend/src/GameButton';
import { GameTableButtons } from '../../../../weekend/src/GameTableButtons';
import { ChartModeDropzonesTemplate } from '../../ChartModeDropzones/ChartModeDropzones.story';
import { Logo } from '../../Logo';

const story = createStory({
  title: 'mobile/MobileGameTableLayout',
  component: MobileGameTableLayout,
  style: {
    marginTop: '10rem',
  },
});

export const MobileGameTableLayoutTemplate: Story = (args) => {
  const [result, setResult] = React.useState<number | null>(null);
  const [chartMode, setChartMode] = React.useState(false);

  const onPlay = () => {
    setResult(10);
  };

  const onWheelStop = () => {
    setResult(null);
  };

  const onToggleMode = () => {
    setChartMode(!chartMode);
  };

  return (
    <MobileGameTableLayout
      chartMode={chartMode}
      logo={<Logo />}
      rouletteWheel={
        <RouletteWheelTemplate value={result} onWheelStop={onWheelStop}>
          <Dropzones>
            <Dropzone type="down" />
            <Dropzone type="up" />
          </Dropzones>
        </RouletteWheelTemplate>
      }
      chips={<ChipsControlsTemplate />}
      buttons={
        <GameTableButtons>
          <GameButton color="primary" onClick={onPlay} large>
            Play
          </GameButton>
          <GameButton large>Double</GameButton>
          <GameButton large>Clear</GameButton>
          <GameButton sublabel="bet" unclickable sublabelAlignTop large>
            $0.00
          </GameButton>
          <GameButton sublabel="chart" sublabelAlignTop color="green" large onClick={onToggleMode}>
            $0.00
          </GameButton>
        </GameTableButtons>
      }
      gameRounds={<GameRoundsTemplate />}
      autoplayCounter={<AutoplayCounterTemplate />}
      chartModeDropzones={<ChartModeDropzonesTemplate />}
      {...args}
    />
  );
};
MobileGameTableLayoutTemplate.storyName = 'MobileGameTableLayout';

export default story;
