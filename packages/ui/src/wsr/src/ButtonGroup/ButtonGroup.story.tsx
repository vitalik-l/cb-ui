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
  const [value, setValue] = React.useState(0);

  return (
    <ButtonGroup {...args} value={value} onChange={setValue}>
      <Button>First</Button>
      <Button>Second</Button>
    </ButtonGroup>
  );
};
Template.storyName = 'ButtonGroup';

export default story;
