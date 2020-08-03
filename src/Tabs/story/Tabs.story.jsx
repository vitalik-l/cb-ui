import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
} from '@storybook/addon-knobs';

// styles
import '../styles/default.scss';

import Test from './Test';

const stories = storiesOf('Tabs', module);
stories.addDecorator(withKnobs);

stories.add('default', () => (
  <Test />
));
