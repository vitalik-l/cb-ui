import React from 'react';
import { configure, setAddon , addDecorator} from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { withInfo } from '@storybook/addon-info';
import packageJson from '../package.json';
import Container from './Container';

addDecorator(
	withInfo({
		styles: {
			children: {
				width: '100%',
			},
		},
		maxPropStringLength: 200, // Displays the first 200 characters in the default prop string
	})
);

addDecorator(story => <Container story={story} />);

setOptions({
  url: 'https://github.com/romanCB/cb-general',
  name: `CB GENERAL ${packageJson.version}`,
  downPanelInRight: true
});

const req = require.context('../src', true, /.+\.story\.js?x/);

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module);

