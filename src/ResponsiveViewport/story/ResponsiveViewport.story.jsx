import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

const stories = storiesOf('ResponsiveViewport', module);
stories.addDecorator(withKnobs);

import ResponsiveViewport from '../';
import useViewport from '../useViewport';

function App() {
	const {viewportWidth, viewportHeight} = useViewport();

	return (
		<div style={{
			background: 'yellow',
			width: viewportWidth,
			height: viewportHeight,
			margin: '0 auto',
			transition: 'all 0.5s'
		}} />
	)
}

stories.add('ResponsiveViewport', () => {
	return (
		<ResponsiveViewport
			minRatio={4/3}
			maxRatio={21/9}
			timeout={0}
		>
			<App />
		</ResponsiveViewport>
	)
});
