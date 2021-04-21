import React from 'react';
import { Story } from '@storybook/react';

// local files
import { index } from '../../story/createStory';
import { TabsPanel } from './index';
import { TabsTemplate } from '../Tabs/Tabs.story';
import { TabsPanelContent } from './TabsPanelContent';

const story = index({
  title: 'TabsPanel',
  component: TabsPanel,
  style: {
    height: '25rem',
  },
});

export const TabsPanelTemplate: Story = (args) => (
  <TabsPanel {...args}>
    <TabsTemplate />
    <TabsPanelContent>
      <div style={{ height: 400 }} />
    </TabsPanelContent>
  </TabsPanel>
);
TabsPanelTemplate.storyName = 'TabsPanel';

export default story;
