import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number } from '@storybook/addon-knobs';

// styles
import '../styles/default.scss';

import InputRange from '..';

const stories = storiesOf('InputRange', module);
stories.addDecorator(withKnobs);

stories.add('default', () => (
  <InputRange value={number('value', 40)} onChange={action('onChange')} />
));

stories.add('state', () => {
  const [value, setValue] = React.useState(0);

  return <InputRange value={value} onChange={(v) => setValue(v)}/>;
});
