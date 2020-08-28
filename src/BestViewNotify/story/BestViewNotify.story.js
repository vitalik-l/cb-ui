import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

// styles
// import './style.scss';
import '../styles/default.scss';

import BestViewNotify from '..';

const stories = storiesOf('BestViewNotify', module);
stories.addDecorator(withKnobs);

stories.add('default', () => (
  <BestViewNotify />
));
