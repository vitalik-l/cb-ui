import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs, text, boolean, number, select,
} from '@storybook/addon-knobs';

// styles
import '../styles/default.scss';

import InputRange from '..';

const stories = storiesOf('InputRange', module);
stories.addDecorator(withKnobs);

stories.add('Slider', () => (
  <InputRange
    value={number('value', 40)}
    onChange={action('onChange')}
  />
));
