import React from 'react';
import { Story } from '@storybook/react';

// local files
import { RadioGroup } from './RadioGroup';
import { SwitchBase } from '../SwitchBase';
import { createStory } from '../../story';

const story = createStory({
  title: 'RadioGroup',
  component: RadioGroup,
});

const Template = () => {
  const [value, setValue] = React.useState();

  return (
    <RadioGroup value={value} onChange={setValue}>
      <SwitchBase>One</SwitchBase>
      <SwitchBase>Two</SwitchBase>
      <SwitchBase>Three</SwitchBase>
    </RadioGroup>
  );
};

export const Default: Story = Template.bind({});
Default.storyName = 'RadioGroup';

export default story;
