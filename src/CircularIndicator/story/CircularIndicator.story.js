import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs, boolean, number, select,
} from '@storybook/addon-knobs';

// styles
import './style.scss';

import { CircularIndicator, RoundButton } from '../index';

const stories = storiesOf('CircularIndicator', module);
stories.addDecorator(withKnobs);

function defaultView() {
  return (
    <div className="story-CircularIndicator">
      <CircularIndicator
        progress={number('progress')}
        reverse={boolean('reverse', false)}
      >
        <RoundButton
          type={select('type', ['green', 'red', 'orange'], 'green')}
        />
      </CircularIndicator>
    </div>
  );
}

stories.add('default', defaultView);
