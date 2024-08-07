import React from 'react';

// local files
import { createStory } from '../../story';
import { Ticker, TickerItem } from './index';

const story = createStory({
  title: 'Ticker',
  component: Ticker,
  style: {
    width: '10rem',
    fontSize: '1em',
  },
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
