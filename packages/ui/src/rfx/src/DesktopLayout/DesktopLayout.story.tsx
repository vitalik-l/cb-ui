import React from 'react';
import { Story } from '@storybook/react';

// local files
import { Root } from '../../../core/src/Root';
import { createStory } from '../../story';
import { DesktopLayout } from './index';
import { HeaderTemplate } from '../../../weekend/src/Header/Header.story';
import { TabsPanelTemplate } from '../../../weekend/src/TabsPanel/TansPanel.story';
import { TradingControlsTemplate } from '../TradingControlsLayout/TradingControlsLayout.story';
import { Logo } from '../Logo';
import { SymbolTabsTemplate } from '../SymbolTabs/SymbolTabs.story';
import { ButtonGroup } from '@cb-general/weekend/ButtonGroup';
import { Button } from '@cb-general/weekend/Button';
import { ChartControls, ChartControlsSeparator } from '../../../weekend/src/ChartControls';
import { CrosshairIcon, PauseIcon, PointerIcon } from '../../../weekend/src/icons';

const story = createStory({
  title: 'DesktopLayout',
  component: DesktopLayout,
});

const ChartControlsTemplate = (args: any) => {
  return (
    <ChartControls {...args}>
      <SymbolTabsTemplate className="align-self-end mr-4" />
      <ButtonGroup>
        <Button>TICK</Button>
        <Button>M1</Button>
      </ButtonGroup>
      <ChartControlsSeparator />
      <ButtonGroup>
        <Button>
          <PointerIcon size="large" />
        </Button>
        <Button>
          <CrosshairIcon size="large" />
        </Button>
        <Button>
          <PauseIcon size="large" />
        </Button>
      </ButtonGroup>
    </ChartControls>
  );
};

export const Template: Story = () => (
  <Root>
    <DesktopLayout
      header={<HeaderTemplate logo={<Logo />} />}
      chartControls={<ChartControlsTemplate alignRight />}
      tabs={<TabsPanelTemplate />}
      tradingControls={<TradingControlsTemplate />}
    />
  </Root>
);
Template.storyName = 'DesktopLayout';

export default story;
