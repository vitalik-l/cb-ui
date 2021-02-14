import React from 'react';
import { Story } from '@storybook/react';
import clsx from 'clsx';
import { TrendDownIcon, TrendUpIcon } from '@cb-general/weekend/icons';

// local files
import { createStory } from '../createStory';
import { TradeButton, tradeButtonStyles } from './index';

const story = createStory({
  title: 'TradeButton',
  component: TradeButton,
  argTypes: {
    disabled: { control: 'boolean' },
  },
});

export const TradeButtonTemplate: Story = ({ textRight, ...args }) => (
  <TradeButton {...args}>
    <div className={tradeButtonStyles.ContentTop}>
      <div>
        <div className={tradeButtonStyles.TypTrendAbove}>TREND {textRight ? 'DOWN' : 'UP'}</div>
        <div className={tradeButtonStyles.TypTrend}>{textRight ? 'SELL' : 'BUY'}</div>
      </div>
      {textRight ? <TrendDownIcon /> : <TrendUpIcon />}
    </div>
    <div className={clsx(tradeButtonStyles.ContentBottom, { 'text-right': textRight })}>
      <div>Potential payout</div>
      <div className={tradeButtonStyles.TypMoney}>$2.00</div>
    </div>
  </TradeButton>
);
TradeButtonTemplate.storyName = 'Trend Up';
(TradeButtonTemplate as any).displayName = 'TradeButton';

export const TrendDown = TradeButtonTemplate.bind({});
TrendDown.args = {
  textRight: true,
};

export default story;
