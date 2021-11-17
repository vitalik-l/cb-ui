import React from 'react';
import { RadioGroup } from '@cb-general/core/RadioGroup';
import { Story } from '@storybook/react';
import { createStory } from '../../story';
import { Radio } from './index';

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

  return (
    <RadioGroup onChange={setValue} value={value} layout="inline">
      <Radio value="first">first</Radio>
      <Radio value="second">Second</Radio>
    </RadioGroup>
  );
};

export default story;
