import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
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
      <Radio name="radio" value="value1" checked={value === 'value1'} onChange={onChange} />
      <Radio name="radio" value="value2" checked={value === 'value2'} onChange={onChange} />
    </form>
  );
};
Template.storyName = 'Radio';

export default story;
