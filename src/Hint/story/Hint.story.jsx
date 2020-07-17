import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

const stories = storiesOf('Hint', module);
stories.addDecorator(withKnobs);

// styles
import './style.scss';
import '../styles/default.scss';

import Hint from '../';

stories.add('default', () => {
	return (
		<div className="story-container">
			<div>
				<Hint
					show={true}
					arrowSide={select('side of arrow', ['left', 'top', 'right', 'bottom'], 'right')}
					renderTo={false}
				>
					<h3>Select Risk</h3>
					<p>Amount Here!</p>
				</Hint>
			</div>
		</div>
	)
});
