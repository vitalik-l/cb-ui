import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs, text, select,
} from '@storybook/addon-knobs';

import '../styles/fonts.scss';
import '../styles/default.scss';
import GameCard from '..';

const stories = storiesOf('GameCard', module);
stories.addDecorator(withKnobs);

const SUITS = ['clubs', 'hearts', 'diamonds', 'spades'];

stories.add('default', () => (
  <GameCard
    suit={select('suit', SUITS, 'clubs')}
    value={text('value', 'A')}
  />
));
