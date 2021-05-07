import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { ChartModeDropzones, ChartModeDropzone } from './index';
import { Chip } from '../../../weekend/src/Chip';
import { ChipsStack } from '../../../weekend/src/ChipsStack';

const story = createStory({
  title: 'ChartModeDropzones',
  component: ChartModeDropzones,
  style: {
    width: '50rem',
  },
});

export const ChartModeDropzonesTemplate: Story = (args) => (
  <ChartModeDropzones {...args}>
    <ChartModeDropzone type="down" label="RED" sublabel="pays 1:1">
      <ChipsStack offsetTop={-2} offsetLeft={2}>
        <Chip />
        <Chip />
        <Chip />
        <Chip />
        <Chip />
        <Chip />
        <Chip />
        <Chip />
        <Chip />
        <Chip />
        <Chip />
        <Chip />
        <Chip />
        <Chip />
        <Chip />
        <Chip />
        <Chip />
        <Chip />
      </ChipsStack>
    </ChartModeDropzone>
    <ChartModeDropzone type="up" label="BLACK" sublabel="pays 1:1" nthChild="last">
      <ChipsStack offsetTop={-2} offsetLeft={2}>
        <Chip />
        <Chip />
        <Chip />
      </ChipsStack>
    </ChartModeDropzone>
  </ChartModeDropzones>
);
ChartModeDropzonesTemplate.storyName = 'ChartModeDropzones';

export default story;
