import React from 'react';
import { Story } from '@storybook/react';
import { createStory } from '../../story';
import { Panel, PanelSeparator } from './index';

const story = createStory({
  title: 'Panel',
  component: Panel,
});

export const Template: Story = (args) => (
  <Panel>
    <div>content</div>
    <PanelSeparator />
    <div>other content</div>
  </Panel>
);
Template.storyName = 'Panel';

export default story;
