import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs, select,
} from '@storybook/addon-knobs';

// styles
import './style.scss';

import { ButtonGroup, ButtonGroupItem } from '../index';

const stories = storiesOf('ButtonGroup', module);
stories.addDecorator(withKnobs);

const theme = () => select('Theme', ['wf', 'wb-mobile', 'wb-mobile-tabs'], 'wb-mobile');

stories.add('default', () => {
  const [value, setValue] = useState(1);

  const onChange = (value) => {
    setValue(value);
  };

  return (
    <span className={theme()}>
      <ButtonGroup value={value} onChange={onChange}>
        <ButtonGroupItem value={1}>1</ButtonGroupItem>
        <ButtonGroupItem value={2}>2</ButtonGroupItem>
        <ButtonGroupItem value={3} onClick={() => setValue(3)}>3</ButtonGroupItem>
      </ButtonGroup>
    </span>
  );
});

stories.add('active value', () => (
  <span className={theme()}>
    <ButtonGroup value={select('value', [1, 2, 3], 1)}>
      <ButtonGroupItem value={1} onClick={action('onClick')}>1</ButtonGroupItem>
      <ButtonGroupItem value={2}>2</ButtonGroupItem>
      <ButtonGroupItem value={3}>3</ButtonGroupItem>
    </ButtonGroup>
  </span>
));

stories.add('onChange', () => (
  <span className={theme()}>
    <ButtonGroup value={select('value', [1, 2, 3], 1)} onChange={action('onChange')}>
      <ButtonGroupItem value={1} onClick={action('onClick')}>1</ButtonGroupItem>
      <ButtonGroupItem value={2}>2</ButtonGroupItem>
      <ButtonGroupItem value={3}>3</ButtonGroupItem>
    </ButtonGroup>
  </span>
));
