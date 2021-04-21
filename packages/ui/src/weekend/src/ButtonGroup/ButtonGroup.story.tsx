import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../../story';
import { ButtonGroup } from './ButtonGroup';
import { Button } from '../Button';

const story = createStory({
  title: 'ButtonGroup',
  component: ButtonGroup,
});

const Template: Story = (args) => {
  const [value, setValue] = React.useState();

  return (
    <ButtonGroup value={value} onChange={setValue} {...args}>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  );
};

export const Default: Story = Template.bind({});
Default.storyName = 'ButtonGroup';

export default story;
