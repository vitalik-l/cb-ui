import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';

// styles
import '../styles/default.scss';

import ProgressButton from '..';

const stories = storiesOf('ProgressButton', module);
stories.addDecorator(withKnobs);

stories.add('ProgressButton', () => (
  <ProgressButton label={text('label', 'early exit')} progress={number('progress', 50)} />
));
