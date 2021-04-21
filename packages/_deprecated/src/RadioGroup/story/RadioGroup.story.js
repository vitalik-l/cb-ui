import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';

// styles
import './style.scss';

import RadioGroup, { Radio } from '..';

const stories = storiesOf('RadioGroup', module);
stories.addDecorator(withKnobs);

const theme = () => select('Theme', ['wf', 'wb-mobile', 'wb-mobile-tabs'], 'wb-mobile');

stories.add('default', () => {
  const [value, setValue] = useState(1);

  const onChange = (value) => {
    setValue(value);
  };

  return (
    <span className={theme()}>
      <RadioGroup value={value} onChange={onChange}>
        <Radio value={1}>1</Radio>
        <Radio value={2}>2</Radio>
        <Radio value={3} onClick={() => setValue(3)}>
          3
        </Radio>
      </RadioGroup>
    </span>
  );
});

stories.add('active value', () => (
  <span className={theme()}>
    <RadioGroup value={select('value', [1, 2, 3], 1)}>
      <Radio value={1} onClick={action('onClick')}>
        1
      </Radio>
      <Radio value={2}>2</Radio>
      <Radio value={3}>3</Radio>
    </RadioGroup>
  </span>
));

stories.add('onChange', () => (
  <span className={theme()}>
    <RadioGroup value={select('value', [1, 2, 3], 1)} onChange={action('onChange')}>
      <Radio value={1} onClick={action('onClick')}>
        1
      </Radio>
      <Radio value={2}>2</Radio>
      <Radio value={3}>3</Radio>
    </RadioGroup>
  </span>
));
