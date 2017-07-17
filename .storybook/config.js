import { configure } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';

setOptions({
  name: 'CB GENERAL',
  downPanelInRight: true
});

const req = require.context('../src', true, /.+\.story\.js?x/);

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module);

