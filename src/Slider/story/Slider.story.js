import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import classNames from 'classnames';
import themeSelect from '../../utils/themeSelect';

import Slider from '..';
import './style.scss';

const stories = storiesOf('Slider', module);
stories.addDecorator(withKnobs);

stories.add('default', () => (
  <div className={classNames('story-Slider', themeSelect())}>
    <Slider />
  </div>
));
