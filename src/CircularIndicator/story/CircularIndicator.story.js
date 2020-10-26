import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs, boolean, number, select,
} from '@storybook/addon-knobs';

// styles
import './style.scss';

import { CircularIndicator, RoundButton, CircularIndicator2 } from '../index';

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
stories.add('v2', () => {
  return (
    <div className="story-CircularIndicator2">
      <CircularIndicator2
        progress={number('progress', 0)}
        reverse={boolean('reverse', false)}
        color={select('color', ['green', 'red', 'black'], 'black')}
        disabled={boolean('disabled', false)}
      >
        TEST
      </CircularIndicator2>
    </div>
  );
});
