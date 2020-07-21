import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);

// styles
// import '../styles/style.scss';

import Button from '../index';

stories.add('default', () => (
	<div className="story-Button">
    	<Button />
	</div>
));


