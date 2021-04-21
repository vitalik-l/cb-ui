import React from 'react';
import { Story } from '@storybook/react';

// local files
import { RadioGroup } from './RadioGroup';
import { Radio } from '../Radio';
import { createStory } from '../../story';

const story = createStory({
  title: 'RadioGroup',
  component: RadioGroup,
});

const Template = () => {
  const [value, setValue] = React.useState();

  return (
    <RadioGroup value={value} onChange={setValue}>
      <Radio>One</Radio>
      <Radio>Two</Radio>
      <Radio>Three</Radio>
    </RadioGroup>
  );
};

export const Default: Story = Template.bind({});
Default.storyName = 'RadioGroup';

export default story;
