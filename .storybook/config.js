import { configure, setAddon } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import infoAddon, { setDefaults } from '@storybook/addon-info';
import packageJson from '../package.json';

import './style.scss';

setAddon(infoAddon);

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

