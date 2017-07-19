import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  url: 'https://github.com/romanCB/cb-general',
  name: 'CB GENERAL',
  downPanelInRight: true
});

const req = require.context('../src', true, /.+\.story\.js?x/);

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module);

