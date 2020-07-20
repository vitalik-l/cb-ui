import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import themeSelect from '../../utils/themeSelect.js';
import classNames from 'classnames';

const stories = storiesOf('CircularIndicator', module);
stories.addDecorator(withKnobs);

// styles
import './style.scss';

import CircularIndicator from '../CircularIndicator';

stories.add('default', () => {
	return (
		<div className="story-CircularIndicator">
			<CircularIndicator
				progress={number('progress')}
				reverse={boolean('reverse', false)}
			/>
		</div>
	)
});
