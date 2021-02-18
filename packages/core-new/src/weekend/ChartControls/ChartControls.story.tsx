import React from 'react';
import { Story } from '@storybook/react';
import {
  CrosshairIcon,
  IndicatorIcon,
  MAIcon,
  PointerIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from '@cb-general/weekend/icons';
import { ButtonGroup } from '@cb-general/weekend/ButtonGroup';
import { Button } from '@cb-general/weekend/Button';

// local files
import { createStory } from '../createStory';
import { ChartControls, chartControlsStyles } from './index';

const story = createStory({
  title: 'ChartControls',
  component: ChartControls,
});

export const ChartControlsTemplate: Story = (args) => (
  <ChartControls {...args}>
    <ButtonGroup>
      <Button>TICK</Button>
      <Button>M1</Button>
    </ButtonGroup>
    <div className={chartControlsStyles.Separator} />
    <ButtonGroup>
      <Button>
        <PointerIcon />
      </Button>
      <Button>
        <CrosshairIcon />
      </Button>
    </ButtonGroup>
    <div className={chartControlsStyles.Separator} />
    <ButtonGroup>
      <Button>
        <ZoomInIcon />
      </Button>
      <Button>
        <ZoomOutIcon />
      </Button>
    </ButtonGroup>
    <div className={chartControlsStyles.Separator} />
    <ButtonGroup>
      <Button>
        <IndicatorIcon />
      </Button>
      <Button>
        <MAIcon />
      </Button>
    </ButtonGroup>
  </ChartControls>
);
ChartControlsTemplate.storyName = 'ChartControls';

export default story;
