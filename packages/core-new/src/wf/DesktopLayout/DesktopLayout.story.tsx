import React from 'react';
import { Story } from '@storybook/react';
import { Root } from '@cb-general/core/Root';
import { Tab, Tabs } from '@cb-general/weekend/Tabs';
import { Panel } from '@cb-general/weekend/Panel';

// local files
import { createStory } from '../createStory';
import { DesktopLayout } from './index';
import { HeaderTemplate } from '../../weekend/Header/Header.story';
import { TickerTemplate } from '../../weekend/Ticker/Ticker.story';
import { ChartControlsTemplate } from '../../weekend/ChartControls/ChartControls.story';
import { TradingControlsTemplate } from '../TradingControls/TradingControls.story';
import { Logo } from '../Logo';

const story = createStory({
  title: 'DesktopLayout',
  component: DesktopLayout,
});

export const Template: Story = (args) => (
  <Root>
    <DesktopLayout
      {...args}
      header={<HeaderTemplate logo={<Logo />}/>}
      ticker={<TickerTemplate />}
      chartControls={<ChartControlsTemplate />}
      tabs={
        <Panel>
          <Tabs value={0}>
            <Tab label="Open Orders" />
            <Tab label="Closed Orders" />
            <Tab label="Settings" />
          </Tabs>
        </Panel>
      }
      tradingControls={<TradingControlsTemplate />}
    />
  </Root>
);
Template.storyName = 'DesktopLayout';

export default story;
