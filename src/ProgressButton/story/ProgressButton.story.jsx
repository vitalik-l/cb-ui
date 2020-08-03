import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs, text, boolean, number, select,
} from '@storybook/addon-knobs';

// styles
import '../styles/default.scss';

import ProgressButton from '..';

const stories = storiesOf('ProgressButton', module);
stories.addDecorator(withKnobs);

stories.add('ProgressButton', () => (
  <ProgressButton
    label={text('label', 'early exit')}
    progress={number('progress', 50)}
  />
));
