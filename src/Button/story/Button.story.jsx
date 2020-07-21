import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import themeSelect from '../../utils/themeSelect.js';
import classNames from 'classnames';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);

// styles
// import '../styles/style.scss';

import Button from '../index';

stories.add('default', () => (
	<div className={classNames('story-Button', themeSelect())}>
    	<Button />
	</div>
));


