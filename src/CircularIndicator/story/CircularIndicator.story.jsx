import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import themeSelect from '../../utils/themeSelect.js';
import classNames from 'classnames';

const stories = storiesOf('CircularIndicator', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);

// styles
import './style.scss';

import {CircularIndicator, RoundButton} from '../index';

function defaultView() {
	return (
		<div className="story-CircularIndicator">
			<CircularIndicator
				progress={number('progress')}
				reverse={boolean('reverse', false)}
			>
				<RoundButton
					type={select('type', ['green', 'red', 'orange'], 'green')}
				/>
			</CircularIndicator>
		</div>
	)
}

stories.add('default', defaultView);
