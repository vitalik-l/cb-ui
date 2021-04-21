import React from 'react';
import { Story } from '@storybook/react';

// local files
import { index } from '../../story/createStory';
import { InfoPanel, InfoPanelItem } from './index';

const story = index({
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
