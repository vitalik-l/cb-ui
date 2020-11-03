import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

// styles
import '../styles/fonts.scss';
import './style.scss';

import { Ticker, TickerValue } from '../index';

const stories = storiesOf('Ticker', module);
stories.addDecorator(withKnobs);

stories.add('default', () => (
  <div className="story-Ticker">
    <Ticker horizontal={boolean('horizontal')}>
      <TickerValue type="up">5</TickerValue>
      <TickerValue>0</TickerValue>
      <TickerValue type="down">7</TickerValue>
      <TickerValue type="down">3</TickerValue>
      <TickerValue>TIE</TickerValue>
    </Ticker>
  </div>
));
