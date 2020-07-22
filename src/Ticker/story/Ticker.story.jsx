import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

const stories = storiesOf('Ticker', module);
stories.addDecorator(withKnobs);

// styles
import '../styles/fonts.scss';
import './style.scss';

import {Ticker, TickerValue} from '../index';

stories.add('default', () => {
	return (
		<div className="story-Ticker">
			<Ticker horizontal={boolean('horizontal')}>
				<TickerValue type="up">
					5
				</TickerValue>
				<TickerValue>
					0
				</TickerValue>
				<TickerValue type="down">
					7
				</TickerValue>
				<TickerValue type="down">
					3
				</TickerValue>
				<TickerValue>
					TIE
				</TickerValue>
			</Ticker>
		</div>
	);
});


