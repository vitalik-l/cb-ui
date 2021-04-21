import React from 'react';
import { Story } from '@storybook/react';
import { Root } from '@cb-general/core/Root';

// local files
import { createStory } from '../../story';
import { DesktopLayout } from './index';
import { HeaderTemplate } from '../../../weekend/src/Header/Header.story';
import { TickerTemplate } from '../../../weekend/src/Ticker/Ticker.story';
import { ChartControlsTemplate } from '../../../weekend/src/ChartControls/ChartControls.story';
import { TradingControlsTemplate } from '../TradingControls/TradingControls.story';
import { Logo } from '../Logo';
import { TabsPanelTemplate } from '../../../weekend/src/TabsPanel/TansPanel.story';

const story = createStory({
  title: 'DesktopLayout',
  component: DesktopLayout,
});

export const Template: Story = (args) => (
  <Root>
    <DesktopLayout
      {...args}
      header={<HeaderTemplate logo={<Logo />} />}
      ticker={<TickerTemplate />}
      chartControls={<ChartControlsTemplate />}
      tabs={<TabsPanelTemplate />}
      tradingControls={<TradingControlsTemplate />}
    />
  </Root>
);
Template.storyName = 'DesktopLayout';

export default story;
