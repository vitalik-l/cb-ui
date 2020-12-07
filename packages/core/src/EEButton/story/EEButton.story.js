import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';
import classNames from 'classnames';
import themeSelect from '../../utils/themeSelect.js';

// styles
import './style.scss';

import EEButton from '../EEButton';

const stories = storiesOf('EEButton', module);
stories.addDecorator(withKnobs);

stories.add('EEButton', () => (
  <div className={classNames('ee-button-story', themeSelect())}>
    <EEButton
      onClick={action('onClick')}
      value={number('value')}
      progress={number('progress')}
      orderIsClosed={boolean('is order closed')}
      percentValue={number('percent value')}
      reverseLoss={boolean('reverse loss')}
    />
  </div>
));
