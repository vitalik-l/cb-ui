import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
} from '@storybook/addon-knobs';

// styles
import '../styles/default.scss';

import { TrendDownIcon, TrendUpIcon, InfoIcon } from '..';

const stories = storiesOf('Icons', module);
stories.addDecorator(withKnobs);

stories.add('Icons', () => (
  <div>
    <table>
      <tr>
        <td>
          TrendDownIcon
        </td>
        <td>
          <TrendDownIcon />
        </td>
      </tr>
      <tr>
        <td>
          TrendUpIcon
        </td>
        <td>
          <TrendUpIcon />
        </td>
      </tr>
      <tr>
        <td>
          InfoIcon
        </td>
        <td>
          <InfoIcon />
        </td>
      </tr>
    </table>
  </div>
));
