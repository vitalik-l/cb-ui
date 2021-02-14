import React from 'react';
import { Story } from '@storybook/react';

// local files
import { createStory } from '../createStory';
import { ButtonGroup } from './ButtonGroup';
import { ButtonBase } from '../ButtonBase';

const story = createStory({
  title: 'ButtonGroup',
  component: ButtonGroup,
});

const Template = () => {
  const [value, setValue] = React.useState();

  return (
    <ButtonGroup value={value} onChange={setValue}>
      <ButtonBase>One</ButtonBase>
      <ButtonBase>Two</ButtonBase>
      <ButtonBase>Three</ButtonBase>
    </ButtonGroup>
  );
};

export const Default: Story = Template.bind({});
Default.storyName = 'ButtonGroup';

export default story;
