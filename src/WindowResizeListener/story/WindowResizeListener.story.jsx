import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

const stories = storiesOf('WindowResizeListener', module);
stories.addDecorator(withKnobs);

import WindowResizeListener from '../index';
import useWindowSize from '../useWindowSize';

function App() {
	const [windowWidth, windowHeight] = useWindowSize();

	return (
		<div style={{
			background: 'yellow',
			width: windowWidth,
			height: windowHeight,
			margin: '0 auto',
			transition: 'all 0.5s'
		}} />
	)
}

stories.add('default', () => {
	return (
		<WindowResizeListener
			timeout={0}
		>
			<App />
		</WindowResizeListener>
	)
});
