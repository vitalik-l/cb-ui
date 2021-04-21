import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Clock from '..';

const stories = storiesOf('Clock', module);
stories.addDecorator(withKnobs);

stories.add('default', () => (
  <div className="story-Clock">
    <Clock />
  </div>
));
