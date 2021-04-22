import React from 'react';
import { Story } from '@storybook/react';
import { ButtonGroup } from '@cb-general/weekend/ButtonGroup';
import { Button } from '@cb-general/weekend/Button';

// local files
import { createStory } from '../../story';
import { ChartControls, ChartControlsSeparator } from './index';
import {
  CrosshairIcon,
  IndicatorIcon,
  MAIcon,
  PointerIcon,
  ZoomInIcon,
  ZoomOutIcon,
  PauseIcon,
} from '../icons';

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
    <ChartControlsSeparator />
    <ButtonGroup>
      <Button>
        <PointerIcon />
      </Button>
      <Button>
        <CrosshairIcon />
      </Button>
      <Button>
        <PauseIcon />
      </Button>
    </ButtonGroup>
    <ChartControlsSeparator />
    <ButtonGroup>
      <Button>
        <ZoomInIcon />
      </Button>
      <Button>
        <ZoomOutIcon />
      </Button>
    </ButtonGroup>
    <ChartControlsSeparator />
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
