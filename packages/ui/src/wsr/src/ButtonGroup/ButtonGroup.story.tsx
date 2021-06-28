import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { ButtonGroup } from './index';
import { Button } from '@cb-general/weekend/Button';

const story = createStory({
  title: 'ButtonGroup',
  component: ButtonGroup,
});

export const Template: Story = (args) => {
  const [value, setValue] = React.useState<null | number>(0);

  const onChange = (newValue: number) => {
    if (value === newValue) {
      setValue(null);
    } else {
      setValue(newValue);
    }
  };

  return (
    <ButtonGroup {...args} value={value} onChange={onChange}>
      <Button>First</Button>
      <Button>Second</Button>
    </ButtonGroup>
  );
};
Template.storyName = 'ButtonGroup';

export default story;
