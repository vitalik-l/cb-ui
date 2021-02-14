import React from 'react';
import { Slider } from '@cb-general/weekend/Slider';
import { Select } from '@cb-general/weekend/Select';

// local files
import { createStory, decorators } from '../createStory';
import {
  TradingPanel,
  TradingPanelHeader,
  TradingPanelSymbol,
  TradingPanelContent,
  tradingPanelStyles,
} from './index';
import { TradeButtonTemplate } from '../TradeButton/TradeButton.story';

const story = createStory({
  title: 'TradingPanel',
  component: TradingPanel,
  decorators: [
    (Story: any) => (
      <div
        style={{
          fontSize: '1rem',
          width: '32.4em',
        }}
      >
        <Story />
      </div>
    ),
    ...decorators,
  ],
});

export const TradingPanelTemplate = ({ symbol, active, ...args }: any) => {
  return (
    <TradingPanel active={active} {...args}>
      <TradingPanelHeader>
        <TradingPanelSymbol symbol="RED/BLACK" active={active} />
      </TradingPanelHeader>
      <TradingPanelContent>
        <div className="d-flex justify-between">
          <div className="flex-fill mt-3">
            <div>
              <div className={tradingPanelStyles.SliderLabel}>
                <div>Min</div>
                <div>Stop Loss</div>
                <div>Max</div>
              </div>
              <Slider />
            </div>
          </div>
          <div className={tradingPanelStyles.Separator} />
          <div className={tradingPanelStyles.ContentTopRight}>
            <div className={tradingPanelStyles.TypBody}>pip value</div>
            <div className={tradingPanelStyles.TypMoney}>$0.02</div>
          </div>
        </div>
        <div className={tradingPanelStyles.Buttons}>
          <TradeButtonTemplate />
          <TradeButtonTemplate textRight />
          <Select className={tradingPanelStyles.Select}>
            <option>1</option>
            <option>5</option>
            <option>500</option>
          </Select>
        </div>
      </TradingPanelContent>
    </TradingPanel>
  );
};
TradingPanelTemplate.storyName = 'TradingPanel';

export default story;
