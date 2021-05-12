import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../../story';
import { GeTradeButton } from './index';
import { TradeButtonTemplate as GeTradeButtonTemplate } from '../TradeButton.story';

const story = createStory({
  title: 'TradeButton/GeTradeButton',
  component: GeTradeButton,
  argTypes: {
    Component: { control: null },
  }
});

export { GeTradeButtonTemplate };
GeTradeButtonTemplate.args = {
  Component: GeTradeButton,
}

export default story;
