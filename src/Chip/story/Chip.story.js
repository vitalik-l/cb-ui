import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs, text, number,
} from '@storybook/addon-knobs';

// styles
import '../styles/default.scss';

import Chip from '..';

const stories = storiesOf('Chip', module);
stories.addDecorator(withKnobs);

stories.add('default', () => (
  <Chip
    value={number('value', 1)}
    onAnimationEnd={action('onAnimationEnd')}
    color={text('color')}
  />
));
