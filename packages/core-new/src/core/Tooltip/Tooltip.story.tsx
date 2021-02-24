import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { Tooltip } from './index';
import { InfoPanel, InfoPanelItem } from '../InfoPanel';

const story = createStory({
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

export default story;
