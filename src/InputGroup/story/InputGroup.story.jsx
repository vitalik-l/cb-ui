import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
} from '@storybook/addon-knobs';
import classNames from 'classnames';
import themeSelect from '../../utils/themeSelect.js';

// styles
import './style.scss';

import InputGroup from '..';

const stories = storiesOf('InputGroup', module);
stories.addDecorator(withKnobs);

stories.add('default', () => (
  <div className={classNames('input-group-story', themeSelect())}>
    <InputGroup label="Change Password">
      <input
        type="password"
        maxLength="16"
        name="newPassword"
        required
      />
    </InputGroup>
  </div>
));

stories.add('Two inputs', () => (
  <div className={classNames('input-group-story', themeSelect())}>
    <InputGroup label="Change Password">
      <input
        type="password"
        maxLength="16"
        name="newPassword"
        required
        label="Password"
      />
      <input
        type="text"
        maxLength="16"
        name="newPassword"
        required
        label="name"
        error="Invalid value"
      />
    </InputGroup>
  </div>
));
