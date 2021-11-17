import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { Checkbox } from './index';

const story = createStory({
  title: 'Checkbox',
  component: Checkbox,
});


export const Template: Story = (args) => {
  const [value, setValue] = React.useState('value1');

  const onChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <form>
      <Checkbox name="checkbox" value="value1" checked={value === 'value1'} onChange={onChange}>
        Checkbox 1
      </Checkbox>
      <Checkbox name="checkbox" value="value2" checked={value === 'value2'} onChange={onChange}>
        Checkbox 2
      </Checkbox>
    </form>
  );
};
Template.storyName = 'Checkbox';

export default story;
