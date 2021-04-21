import React from 'react';
import { Story } from '@storybook/react';

// local files
import { index } from '../../story/createStory';
import { Tooltip } from './index';
import { InfoPanel, InfoPanelItem } from '../InfoPanel';

const story = index({
  title: 'Tooltip',
  component: Tooltip,
  style: {
    margin: '10rem',
  },
  args: {
    placement: 'top',
  },
});

export const Template: Story = (args) => (
  <Tooltip
    {...args}
    title={
      <InfoPanel arrowPosition="bottom">
        <InfoPanelItem>Info panel</InfoPanelItem>
      </InfoPanel>
    }
  >
    <span>Hover me</span>
  </Tooltip>
);
Template.storyName = 'Tooltip';

export const Scale: Story = (args) => (
  <div
    style={{
      transform: 'scale(0.8)',
    }}
  >
    <Tooltip
      {...args}
      title={
        <InfoPanel arrowPosition="bottom">
          <InfoPanelItem>Info panel</InfoPanelItem>
        </InfoPanel>
      }
      open
    >
      <span>Hover me</span>
    </Tooltip>
  </div>
);

export default story;
