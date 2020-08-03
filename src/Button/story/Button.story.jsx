import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs, text, boolean, number, select,
} from '@storybook/addon-knobs';
import classNames from 'classnames';
import themeSelect from '../../utils/themeSelect.js';

import Button from '../index';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

stories.add('default', () => (
  <div className={classNames('story-Button', themeSelect())}>
    <Button />
  </div>
));
