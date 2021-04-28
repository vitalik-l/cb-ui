import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { Dropzones, Dropzone } from './index';
import { ChipsStack } from '../../../weekend/src/ChipsStack';
import { Chip } from '../../../weekend/src/Chip';
import { InfoPanel, InfoPanelItem } from '../../../core/src/InfoPanel';

const story = createStory({
  title: 'Dropzones',
  component: Dropzones,
  style: {
    marginTop: '5em',
  },
});

export const DropzonesTemplate: Story = () => (
  <Dropzones>
    <Dropzone
      type="down"
      label="RED"
      roi="1:1"
      tooltip={
        <InfoPanel>
          <InfoPanelItem>Tooltip</InfoPanelItem>
        </InfoPanel>
      }
    >
      <ChipsStack label="$999,999,999">
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
      <ChipsStack label="$999,999,999">
        <Chip />
        <Chip />
        <Chip />
      </ChipsStack>
    </Dropzone>
    <Dropzone
      type="up"
      label="BLACK"
      roi="1:1"
      tooltip={
        <InfoPanel>
          <InfoPanelItem>Tooltip Open</InfoPanelItem>
        </InfoPanel>
      }
      tooltipOpen
    >
      <ChipsStack label="$999,999,999">
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
        <Chip />
        <Chip />
        <Chip />
        <Chip />
        <Chip />
        <Chip />
      </ChipsStack>
      <ChipsStack label="$999,999,999">
        <Chip />
        <Chip />
        <Chip />
      </ChipsStack>
    </Dropzone>
  </Dropzones>
);
DropzonesTemplate.storyName = 'Dropzones';

export default story;
