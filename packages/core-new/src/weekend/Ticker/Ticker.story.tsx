import React from 'react';

// local files
import { createStory, decorators } from '../createStory';
import { Ticker } from './Ticker';
import { TickerItem } from './TickerItem';

const story = createStory({
  title: 'Ticker',
  component: Ticker,
  decorators: [
    ...decorators,
    (Story: any) => (
      <div style={{ width: '10rem' }}>
        <Story />
      </div>
    ),
  ],
});

export const TickerTemplate = (args: any) => (
  <Ticker {...args}>
    <TickerItem position="left">1</TickerItem>
    <TickerItem>TIE</TickerItem>
    <TickerItem position="right">10</TickerItem>
    <TickerItem position="left">1</TickerItem>
    <TickerItem>TIE</TickerItem>
    <TickerItem position="right">10</TickerItem>
    <TickerItem position="left">1</TickerItem>
    <TickerItem>TIE</TickerItem>
    <TickerItem position="right">10</TickerItem>
    <TickerItem position="left">1</TickerItem>
    <TickerItem>TIE</TickerItem>
    <TickerItem position="right">10</TickerItem>
    <TickerItem position="left">1</TickerItem>
    <TickerItem>TIE</TickerItem>
    <TickerItem position="right">10</TickerItem>
    <TickerItem position="left">1</TickerItem>
    <TickerItem>TIE</TickerItem>
    <TickerItem position="right">10</TickerItem>
    <TickerItem position="left">1</TickerItem>
    <TickerItem>TIE</TickerItem>
    <TickerItem position="right">10</TickerItem>
    <TickerItem position="left">1</TickerItem>
    <TickerItem>TIE</TickerItem>
    <TickerItem position="right">10</TickerItem>
    <TickerItem position="left">1</TickerItem>
    <TickerItem>TIE</TickerItem>
    <TickerItem position="right">10</TickerItem>
  </Ticker>
);
TickerTemplate.storyName = 'Ticker';

export default story;
