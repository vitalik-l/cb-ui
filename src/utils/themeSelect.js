import { select } from '@storybook/addon-knobs';

export default function themeSelect(themes = []) {
  return select('Theme', [
    'default',
    'wf',
    'galileo',
    'wb-mobile',
    ...themes,
  ], 'default');
}
