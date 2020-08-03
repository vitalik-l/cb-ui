import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs, text, boolean, number, select,
} from '@storybook/addon-knobs';

// styles
import './style.scss';

import DropdownTest1 from './DropdownTest1';

const stories = storiesOf('Dropdown', module);
stories.addDecorator(withKnobs);

stories.add('Dropdown', () => (
  <div className="dropdown-story">
    <DropdownTest1 />
  </div>
));
