import React from 'react';
import { Root } from '@cb-general/core/Root';
import { Story } from '@storybook/react';
import { Viewport } from '../../../core/src/Viewport';
import { createStory } from '../../story';
import { WfViewport } from './WfViewport';
import { DesktopLayout } from './index';

// import { HeaderTemplate } from '../../../weekend/src/Header/Header.story';
// import { TickerTemplate } from '../../../weekend/src/Ticker/Ticker.story';
// import { ChartControlsTemplate } from '../../../weekend/src/ChartControls/ChartControls.story';
// import { TradingControlsTemplate } from '../TradingControls/TradingControls.story';
// import { Logo } from '../Logo';
// import { TabsPanelTemplate } from '../../../weekend/src/TabsPanel/TansPanel.story';

const story = createStory({
  title: 'DesktopLayout',
  component: DesktopLayout,
});

export const Template: Story = (args) => (
  <Root>
    <DesktopLayout {...args} />
  </Root>
);
Template.storyName = 'DesktopLayout';

export default story;
