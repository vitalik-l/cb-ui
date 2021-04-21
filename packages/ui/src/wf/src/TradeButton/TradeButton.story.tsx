import React from 'react';
import { Story } from '@storybook/react';
import clsx from 'clsx';
import { TrendDownIcon, TrendUpIcon } from '@cb-general/weekend/icons';

// local files
import { createStory } from '../../story';
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
    <div className={tradeButtonStyles.contentTop}>
      <div>
        <div className={tradeButtonStyles.typTrendAbove}>TREND {textRight ? 'DOWN' : 'UP'}</div>
        <div className={tradeButtonStyles.typTrend}>{textRight ? 'SELL' : 'BUY'}</div>
      </div>
      {textRight ? (
        <TrendDownIcon className={tradeButtonStyles.icon} />
      ) : (
        <TrendUpIcon className={tradeButtonStyles.icon} />
      )}
    </div>
    <div className={clsx(tradeButtonStyles.contentBottom, { 'text-right': textRight })}>
      <div>Potential payout</div>
      <div className={tradeButtonStyles.typMoney}>$2.00</div>
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
