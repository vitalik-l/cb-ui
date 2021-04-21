import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { InfoPanel, InfoPanelItem } from './index';

const story = createStory({
  title: 'InfoPanel',
  component: InfoPanel,
});

export const Template: Story = (args) => (
  <InfoPanel {...args}>
    <InfoPanelItem label="Order">123</InfoPanelItem>
    <InfoPanelItem label="Second">123123</InfoPanelItem>
  </InfoPanel>
);
Template.storyName = 'InfoPanel';

export default story;
