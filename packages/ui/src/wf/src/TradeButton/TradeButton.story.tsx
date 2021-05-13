import React from 'react';
import { Story } from '@storybook/react';
import clsx from 'clsx';
import { TrendDownIcon, TrendUpIcon } from '@cb-general/icons';

// local files
import { createStory } from '../../story';
import { TradeButton } from './index';
import tradeButtonStyles from './WfTradeButton.module.scss';

const story = createStory({
  title: 'TradeButton',
  component: TradeButton,
  argTypes: {
    disabled: { control: 'boolean' },
  },
});

export const TradeButtonTemplate: Story = ({ Component = TradeButton, textRight, ...args }) => (
  <Component {...args}>
    <div className="d-flex justify-between align-center">
      <div>
        <div className="font-bold">TREND {textRight ? 'DOWN' : 'UP'}</div>
        <div className={tradeButtonStyles.typTrend}>{textRight ? 'SELL' : 'BUY'}</div>
      </div>
      {textRight ? <TrendDownIcon className="size-em_3" /> : <TrendUpIcon className="size-em_3" />}
    </div>
    <div className={clsx('mt-1', { 'text-right': textRight })}>
      <div>Potential payout</div>
      <div className="font-bold size-em_1_8">$2.00</div>
    </div>
  </Component>
);
TradeButtonTemplate.storyName = 'Trend Up';
(TradeButtonTemplate as any).displayName = 'TradeButton';

export const TrendDown = TradeButtonTemplate.bind({});
TrendDown.args = {
  textRight: true,
};

export default story;
