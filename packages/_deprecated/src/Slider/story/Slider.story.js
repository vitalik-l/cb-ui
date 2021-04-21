import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number } from '@storybook/addon-knobs';
import classNames from 'classnames';
import themeSelect from '../../utils/themeSelect';

import Slider from '../Slider';
import { Slider as GalileoSlider } from '../galileo';
import './style.scss';

const stories = storiesOf('Slider', module);
stories.addDecorator(withKnobs);

stories.add('default', () => (
  <div className={classNames('story-Slider', themeSelect())}>
    <Slider value={number('value', 1)} />
  </div>
));

stories.add('state', () => {
  const [value, setValue] = React.useState(0);

  const onChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classNames('story-Slider', themeSelect())}>
      <Slider value={value} onChange={onChange} />
    </div>
  );
});

stories.add('state-galileo', () => {
  const [value, setValue] = React.useState(0);

  const onChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classNames('story-GalileoSlider', themeSelect())}>
      <GalileoSlider value={value} onChange={onChange} />
    </div>
  );
});
