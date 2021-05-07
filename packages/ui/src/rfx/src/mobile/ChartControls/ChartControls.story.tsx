import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../../story';
import { ChartControls } from './index';
import { SymbolButtonsTemplate } from '../SymbolButtons/SymbolButtons.story';
import { ButtonGroup } from '../../../../weekend/src/ButtonGroup';
import { Button } from '../../../../weekend/src/Button';
import { IndicatorIcon, MAIcon, CandlesIcon, SplineChartIcon } from '../../../../icons/src';

const story = createStory({
  title: 'mobile/ChartControls',
  component: ChartControls,
});

export const ChartControlsTemplate: Story = (args) => (
  <ChartControls {...args}>
    <SymbolButtonsTemplate />
    <ButtonGroup className="w-100 mt-5" color="gray">
      <Button>
        <IndicatorIcon size="large" />
      </Button>
      <Button>
        <MAIcon size="large" />
      </Button>
    </ButtonGroup>
    <ButtonGroup className="w-100 mt-5">
      <Button>
        <CandlesIcon size="large" />
      </Button>
      <Button>
        <SplineChartIcon size="large" />
      </Button>
    </ButtonGroup>
  </ChartControls>
);
ChartControlsTemplate.storyName = 'ChartControls';
ChartControlsTemplate.args = {
  style: {
    width: '19rem',
    height: '40rem',
  },
};

export default story;
