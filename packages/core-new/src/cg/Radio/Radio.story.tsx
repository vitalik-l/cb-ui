import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { Radio } from './index';
import { RadioGroup } from '../../core/RadioGroup';

const story = createStory({
  title: 'Radio',
  component: Radio,
});

export const Template: Story = (args) => {
  const [value, setValue] = React.useState('value1');

  const onChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <form>
      <Radio name="radio" value="value1" checked={value === 'value1'} onChange={onChange}>
        Radio 1
      </Radio>
      <Radio name="radio" value="value2" checked={value === 'value2'} onChange={onChange}>
        Radio 2
      </Radio>
    </form>
  );
};
Template.storyName = 'Radio';

export const Group: Story = () => {
  const [value, setValue] = React.useState('first');

  const onChange = (event: any) => {
    console.log(event);
    setValue(event.target.value);
  };

  return (
    <RadioGroup onChange={onChange} value={value}>
      <Radio value="first">
        first
      </Radio>
      <Radio value="second">
        Second
      </Radio>
    </RadioGroup>
  )
}

export default story;
