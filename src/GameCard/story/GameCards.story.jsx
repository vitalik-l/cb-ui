import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { withKnobs, text, boolean, number, select } from '@kadira/storybook-addon-knobs';

const stories = storiesOf('GameCard', module);
stories.addDecorator(withKnobs);

import '../styles/fonts.scss';
import '../styles/default.scss';
import GameCard from '../';

const SUITS = ['clubs', 'hearts', 'diamonds', 'spades'];

stories.add('default', () => (
    <GameCard
        suit={select('suit', SUITS, 'clubs')}
        value={text('value', 'A')}
    />
));


