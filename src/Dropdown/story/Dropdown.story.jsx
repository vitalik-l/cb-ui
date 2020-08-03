import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
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
