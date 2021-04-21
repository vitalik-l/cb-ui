import React from 'react';
import { Slider } from '@cb-general/weekend/Slider';
import { Select } from '@cb-general/weekend/Select';

// local files
import { createStory } from '../../story';
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
  style: {
    fontSize: '1rem',
    width: '32.4em',
  },
});

export const TradingPanelTemplate = ({ symbol, active, ...args }: any) => {
  return (
    <TradingPanel active={active} {...args}>
      <TradingPanelHeader>
        <TradingPanelSymbol symbol="RED/BLACK" active={active} />
        <div className="d-flex align-center">
          <div className={tradingPanelStyles.typHeaderLabel}>TAKE PROFIT</div>
          <div className={tradingPanelStyles.typHeaderValue}>100%</div>
        </div>
      </TradingPanelHeader>
      <TradingPanelContent>
        <div className="d-flex justify-between">
          <div className="flex-fill mt-3">
            <div>
              <div className={tradingPanelStyles.sliderLabel}>
                <div>Min</div>
                <div>Stop Loss</div>
                <div>Max</div>
              </div>
              <Slider disabled={!active} />
            </div>
          </div>
          <div className={tradingPanelStyles.separator} />
          <div className={tradingPanelStyles.contentTopRight}>
            <div className={tradingPanelStyles.typBody}>pip value</div>
            <div className={tradingPanelStyles.typMoney}>$0.02</div>
          </div>
        </div>
        <div className={tradingPanelStyles.buttons}>
          <TradeButtonTemplate disabled={!active} className={tradingPanelStyles.tradeButton} />
          <TradeButtonTemplate
            disabled={!active}
            textRight
            className={tradingPanelStyles.tradeButton}
          />
          <Select className={tradingPanelStyles.select} disabled={!active}>
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
